import WindowWrapper from "@hoc/WindowWrapper";
import { WindowControls } from "@components";
import { socials } from "@constants";

import daveImage from "../images/dave.jpg"; // Cesta k obrázku ponechána podle Vašeho vstupu

const sanitizeUrl = (url) => {
  if (typeof url !== "string") return "about:blank";

  const trimmedUrl = url.trim();
  if (trimmedUrl.length === 0) return "about:blank";

  // Povolená schémata pro validaci URL
  const allowedSchemes = ["https:", "http:", "mailto:", "tel:"];

  try {
    const parsedUrl = new URL(trimmedUrl);

    if (allowedSchemes.includes(parsedUrl.protocol)) {
      return trimmedUrl; // Vrátí původní, validní URL
    }
  } catch (e) {}

  return "about:blank"; // Neplatné nebo neznámé schéma
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
              safeUrl.startsWith("http:") || safeUrl.startsWith("https:");

            // 1. Zkontrolujeme, zda je URL neplatná
            if (safeUrl === "about:blank") {
              return (
                <li key={id} style={{ backgroundColor: bg, color: "#ffffff" }}>
                  {/* Vykreslíme neklikatelný kontejner */}
                  <div title={text} aria-disabled="true">
                    <img src={icon} alt={text} className="size-5" />
                    <p>{text}</p>
                  </div>
                </li>
              );
            }

            // 2. Vykreslení funkčního odkazu
            return (
              <li key={id} style={{ backgroundColor: bg, color: "#ffffff" }}>
                <a
                  href={safeUrl}
                  // Target a Rel pouze pro HTTP/HTTPS odkazy
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
