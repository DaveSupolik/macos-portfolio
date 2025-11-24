import React from "react"; // Explicitní import React je nutný pro React.useRef/useState/useEffect
import { WindowControls } from "@components/index.js";
import WindowWrapper from "@hoc/WindowWrapper.jsx";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// 1. Importujeme soubor s životopisem (PDF asset)
import resumePdf from "../files/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  // 🚨 NOVÉ: Reference na kontejner pro měření šířky
  const containerRef = React.useRef(null);
  // 🚨 NOVÉ: Stav pro uložení šířky PDF stránky
  const [pageWidth, setPageWidth] = React.useState(750); // Původní hodnota jako fallback

  // 🚨 NOVÉ: useEffect pro aktualizaci šířky při mountu a resize
  React.useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        // Získáme aktuální šířku kontejneru (minus padding)
        const w = containerRef.current.clientWidth;
        // Nastavíme šířku, omezíme ji pro bezpečnost (clamp: 320px min, 900px max)
        setPageWidth(Math.max(320, Math.min(900, w - 16))); // -16px pro padding/okraje
      }
    };

    // Spustíme hned při mountu
    update();

    // Posluchač pro změnu velikosti okna
    window.addEventListener("resize", update);

    // Cleanup funkce
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a
          href={resumePdf}
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>

      {/* 🚨 NOVÉ: Kontejner s referencí pro měření šířky */}
      <div ref={containerRef} className="p-2">
        {typeof window !== "undefined" && ( // Podmínka pro vykreslení na straně klienta
          <Document
            file={resumePdf}
            loading={<div className="p-4">Loading resume…</div>}
            error={
              <div className="p-4 text-red-600">Failed to load resume.</div>
            }
            onLoadError={(err) => console.error("PDF load error:", err)}
          >
            <Page
              pageNumber={1}
              // 🚨 NOVÉ: Dynamická šířka
              width={pageWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        )}
        {typeof window === "undefined" && ( // Fallback pro SSR (Server-Side Rendering)
          <div className="p-4">Loading resume…</div>
        )}
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
