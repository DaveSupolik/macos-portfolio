import WindowWrapper from "@hoc/WindowWrapper";
import { WindowControls } from "@components";
import { socials } from "@constants";

import daveImage from "../images/dave.jpg";

const sanitizeUrl = (url) => {
  if (typeof url !== "string") return "#";
  const allowedSchemes = ["https://", "http://", "mailto:", "tel:"];
  const trimmed = url.trim().toLowerCase();
  if (allowedSchemes.some((scheme) => trimmed.startsWith(scheme))) {
    return url;
  }

  return "about:blank";
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
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg, color: "#ffffff" }}>
              <a
                href={sanitizeUrl(link)}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
