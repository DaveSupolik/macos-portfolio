import WindowWrapper from "@hoc/WindowWrapper";
import { WindowControls } from "@components";
import { socials } from "@constants";

import daveImage from "../images/dave.jpg"; // Cesta k obrázku ponechána podle Vašeho vstupu

const sanitizeUrl = (url) => {
  // 1. Explicitní kontrola null/falsy/ne-řetězec
  if (!url || typeof url !== "string") return null;

  const trimmedUrl = url.trim();
  if (trimmedUrl.length === 0) return null;

  // 2. Kontrola řídicích znaků a bílých mezer
  if (/[^\S ]|[\u0000-\u001F\u007F]/.test(trimmedUrl)) return null;

  // 3. Normalizace protokolem relativních URL (//example.com) na https://
  const normalized = trimmedUrl.startsWith("//")
    ? `https:${trimmedUrl}`
    : trimmedUrl;

  // 4. Seznam povolených schémat
  const allowedSchemes = ["https:", "http:", "mailto:", "tel:"];

  try {
    // Používáme normalizovanou URL pro parsování
    const parsedUrl = new URL(normalized);

    // 🚨 ROBUSTNÍ KONTROLA SCHÉMATU (NOVÉ)
    // Převedeme protokol z parsované URL na malá písmena pro striktní porovnání.
    const protocolLower = parsedUrl.protocol.toLowerCase();

    if (allowedSchemes.includes(protocolLower)) {
      // Upgrade na HTTPS
      if (protocolLower === "http:") {
        // Používáme RegExp pro bezpečný a robustní upgrade, pokud je URL http://
        return normalized.replace(/^http:\/\//i, "https://");
      }

      // Vracíme normalized (již ošetřená) URL pro https, mailto a tel
      return normalized;
    } else {
      // Protokol není v seznamu povolených
      return null;
    }
  } catch {
    // Pokud URL constructor selže (neplatný formát), vrátíme null.
    return null;
  }
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
