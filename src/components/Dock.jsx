import { dockApps } from "@constants";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { Tooltip } from "react-tooltip";
import gsap from "gsap";
import useWindowStore from "@store/window.js";

// === FUNKCE PRO SANITIZACI ZDROJE IKONY ===
const sanitizeIconSrc = (src) => {
  if (typeof src !== "string" || !src) return null;

  const lowerSrc = src.toLowerCase().trim();

  // Zakázat známé nebezpečné protokoly pro obrázky
  if (lowerSrc.startsWith("javascript:") || lowerSrc.startsWith("vbscript:")) {
    return null;
  }

  // Povolit data-URL, http(s) a relativní/základní cesty.
  return src;
};

const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const dockRef = React.useRef(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");
    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();
      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };
    const resetIcons = () =>
      icons.forEach((icon) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        })
      );
    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);
  const toggleApp = (app) => {
    if (!app.canOpen) return;

    const window = windows[app.id];

    if (!window) {
      console.error(`No window configuration found for app id: ${app.id}`);
      return;
    }

    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };
  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => {
          // 1. Sanitizace a ověření zdroje ikony
          const safeIconSrc = sanitizeIconSrc(icon);

          return (
            <div key={id} className="relative flex justify-center">
              <button
                type="button"
                className="dock-icon"
                aria-label={name}
                data-tooltip-id="dock-tooltip"
                data-tooltip-content={name}
                data-tooltip-delay-show={150}
                disabled={!canOpen}
                onClick={() => toggleApp({ id, canOpen })}
              >
                {/* 2. Vykreslení pouze s bezpečně sanitizovanou URL */}
                {safeIconSrc ? (
                  <img
                    // 🚨 KRITICKÁ OPRAVA: Používá se BEZPEČNÝ zdroj!
                    src={safeIconSrc}
                    alt={name ? `${name} icon` : "app icon"}
                    loading="lazy"
                    className={canOpen ? "" : "opacity-60"}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      // Nahrazení transparentním 1x1 GIF Data URL
                      e.currentTarget.src =
                        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                      e.currentTarget.alt = "icon failed to load";
                    }}
                  />
                ) : (
                  // VYLEPŠENÝ ZÁSTUPNÝ PRVEK: Pro zachování interakce a A11y
                  <span
                    role="img"
                    aria-label={`${name || "app"} icon placeholder`}
                    className={`inline-flex items-center justify-center rounded ${
                      canOpen ? "" : "opacity-60"
                    }`}
                    style={{
                      width: 24,
                      height: 24,
                      backgroundColor: "rgba(255,255,255,0.12)",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{ fontSize: 10, lineHeight: 1 }}
                    >
                      •
                    </span>
                  </span>
                )}
              </button>
            </div>
          );
        })}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
