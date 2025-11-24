import React from "react";
import { navIcons, navLinks } from "@constants";
import dayjs from "dayjs";
import useWindowStore from "@store/window";

// 1. Importujeme Apple logo
import appleLogo from "../images/logo.svg";

const sanitizeIconSrc = (src) => {
  if (typeof src !== "string" || !src) return null;

  const lowerSrc = src.toLowerCase().trim();

  // 1. ZABRÁNIT XSS
  // Zakázat známé nebezpečné protokoly pro obrázky
  if (lowerSrc.startsWith("javascript:") || lowerSrc.startsWith("vbscript:")) {
    return null;
  }

  // 2. OMEZIT EXTERNI ZDROJE A NEZÁVISLÉ DATA: URL
  // Ikony by měly být buď relativní cesty (interní), nebo base64 (interně generované).

  // Zakázat vzdálené URL (SSRF, tracking beacons)
  if (lowerSrc.startsWith("http:") || lowerSrc.startsWith("https:")) {
    return null;
  }

  // Volné data: URL (které by mohly nést velké payloady) také zakážeme,
  // pokud nezačínají base64 (což by mělo být ošetřeno bundlerem).
  // Nicméně Base64 URL typicky začíná "data:image/svg+xml;base64," nebo podobně.
  // Pro nejpřísnější ochranu se zaměříme na blokování http/https.

  // Pokud je to Base64 generované bundlerem, projde to.
  // Pokud je to relativní cesta, projde to.
  return src;
};

const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        {/* 2. Apple Logo */}
        <img
          src={appleLogo}
          alt="apple logo"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.style.visibility = "hidden";
          }}
        />
        <p className="font-bold">Dave's Macbook</p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => {
            // 🚨 APLIKACE SANITIZACE: Získáme bezpečný zdroj
            const safeIconSrc = sanitizeIconSrc(img);

            return (
              <li key={id}>
                {/* PODMÍNĚNÉ VYKRESLENÍ: Vykreslí img jen, pokud je zdroj bezpečný */}
                {safeIconSrc && (
                  <img
                    src={safeIconSrc}
                    alt={`icon-${id}`}
                    className="icon-hover"
                  />
                )}
              </li>
            );
          })}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
