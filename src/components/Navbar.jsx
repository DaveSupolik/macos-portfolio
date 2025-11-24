import React from "react";
import { navIcons, navLinks } from "@constants";
import dayjs from "dayjs";
import useWindowStore from "@store/window";

// 1. Importujeme Apple logo
// Předpokládáme, že komponenta je v 'src/components' a obrázky v 'src/images'
import appleLogo from "../images/logo.svg";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        {/* 2. Nahrazení hardcoded cesty proměnnou */}
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
          {/* POZNÁMKA: navIcons již používá proměnné (img) z konstant,
            které by měly být importovány a opraveny v souboru s konstantami.
          */}
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} className="icon-hover" />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
