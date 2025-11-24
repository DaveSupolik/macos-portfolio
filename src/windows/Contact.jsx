import WindowWrapper from "@hoc/WindowWrapper";
import { WindowControls } from "@components";
import { socials } from "@constants";

import daveImage from "../images/dave.jpg"; // Cesta k obrázku ponechána podle Vašeho vstupu

const sanitizeUrl = (url) => {
  // 1. Explicitní kontrola null/falsy/ne-řetězec
  if (!url || typeof url !== "string") return null;

  const trimmedUrl = url.trim();
  // 2. Kontrolujeme prázdný řetězec
  if (trimmedUrl.length === 0) return null;

  // 🚨 NOVÉ: Odmítnutí řídicích znaků a bílých mezer uvnitř URL (kromě mezery po trimu)
  // [^\S ] = jakýkoli znak, který není mezerou (space) nebo prázdným znakem (whitespace)
  if (/[^\S ]|[\u0000-\u001F\u007F]/.test(trimmedUrl)) return null;

  // 🚨 NOVÉ: Normalizace protokolem relativních URL (//example.com) na https://
  const normalized = trimmedUrl.startsWith("//")
    ? `https:${trimmedUrl}`
    : trimmedUrl;

  // Povolená schémata pro validaci URL
  const allowedSchemes = ["https:", "http:", "mailto:", "tel:"];

  try {
    // Používáme normalizovanou URL pro parsování
    const parsedUrl = new URL(normalized);

    if (allowedSchemes.includes(parsedUrl.protocol)) {
      // Upgrade na HTTPS
      if (parsedUrl.protocol === "http:") {
        // Používáme RegExp pro bezpečný a robustní upgrade, pokud je URL http://
        return normalized.replace(/^http:\/\//i, "https://");
      }

      // Vrátí původní, validní URL (https, mailto, tel)
      // Vracíme normalized, protože je již ošetřená (protokol-relativní)
      return normalized;
    }
  } catch {
    // Pokud URL constructor selže (neplatný formát), vrátíme null.
    return null;
  }

  // Pokud schéma není v seznamu, vrátíme null.
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
              safeUrl &&
              (safeUrl.startsWith("http:") || safeUrl.startsWith("https:"));

            if (!safeUrl) {
              return (
                <li key={id} style={{ backgroundColor: bg, color: "#ffffff" }}>
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
