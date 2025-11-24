import WindowWrapper from "@hoc/WindowWrapper";
import { WindowControls } from "@components";
import { socials } from "@constants";

import daveImage from "../images/dave.jpg"; // Cesta k obrázku ponechána podle Vašeho vstupu

const sanitizeUrl = (url) => {
  // 1. Explicitně kontrolujeme null, undefined nebo ne-řetězec
  if (!url || typeof url !== "string") return null;

  const trimmedUrl = url.trim();
  // 2. Kontrolujeme prázdný řetězec
  if (trimmedUrl.length === 0) return null;

  // Povolená schémata pro validaci URL
  const allowedSchemes = ["https:", "http:", "mailto:", "tel:"];

  try {
    const parsedUrl = new URL(trimmedUrl);

    // Pokud je schéma "http:", nahradíme ho "https:"
    if (parsedUrl.protocol === "http:") {
      const upgradedUrl = trimmedUrl.replace("http://", "https://");
      return upgradedUrl;
    }

    if (allowedSchemes.includes(parsedUrl.protocol)) {
      return trimmedUrl; // Vrátí původní, validní URL (https, mailto, tel)
    }
  } catch {
    // Pokud URL constructor selže (např. neplatný formát), považujeme ji za nevalidní.
    return null;
  }

  // Pokud URL neprošla žádnou kontrolou schématu
  return null;
};

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact me</h2>
      </div>
      <div className="p-5 space-y-5">
        <img src={daveImage} alt="Dave" className="w-20 rounded-full" />
        <h3>Lets Connect</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk tech? Im in.</p>
        <p>dave.supolik@gmail.com</p>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => {
            const safeUrl = sanitizeUrl(link);

            // Kontrola, zda je URL platný webový odkaz (http/https)
            const isHttpLink =
              !!safeUrl &&
              (safeUrl.startsWith("http:") || safeUrl.startsWith("https:"));

            // Pokud je safeUrl falsy (null), vykreslíme neklikatelný prvek.
            if (!safeUrl) {
              return (
                <li key={id} style={{ backgroundColor: bg, color: "#ffffff" }}>
                  {/* Vylepšená přístupnost: role="button", aria-disabled a tabIndex pro neklikatelný prvek */}
                  <div
                    title={text}
                    role="button"
                    aria-disabled="true"
                    tabIndex={-1}
                    style={{ cursor: "not-allowed" }}
                  >
                    <img src={icon} alt={text} className="size-5" />
                    <p>{text}</p>
                  </div>
                </li>
              );
            }

            // Vykreslení funkčního odkazu
            return (
              <li key={id} style={{ backgroundColor: bg, color: "#ffffff" }}>
                <a
                  href={safeUrl}
                  target={isHttpLink ? "_blank" : undefined}
                  rel={isHttpLink ? "noopener noreferrer" : undefined}
                  title={text}
                >
                  <img src={icon} alt={text} className="size-5" />
                  <p>{text}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
