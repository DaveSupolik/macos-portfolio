import React from "react";
import { navIcons, navLinks } from "@constants";
import dayjs from "dayjs";
import useWindowStore from "@store/window";

// 1. Importujeme Apple logo
import appleLogo from "../images/logo.svg";

// === NOVÁ FUNKCE PRO SANITIZACI ZDROJE IKONY ===
const sanitizeIconSrc = (src) => {
  if (typeof src !== "string" || !src) return null;

  const lowerSrc = src.toLowerCase().trim();

  // Zakázat známé nebezpečné protokoly pro obrázky (XSS prevence)
  if (lowerSrc.startsWith("javascript:") || lowerSrc.startsWith("vbscript:")) {
    return null;
  }

  // Povolit data-URL, http(s) a relativní/základní cesty.
  // Pro interní assety se jedná o dostatečnou ochranu.
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
