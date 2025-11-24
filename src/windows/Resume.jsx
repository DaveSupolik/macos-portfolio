import { WindowControls } from "@components/index.js";
import WindowWrapper from "@hoc/WindowWrapper.jsx";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// 1. Importujeme soubor s životopisem (PDF asset)
// Předpokládáme, že komponenta je v 'src/components' a PDF v 'src/files'
import resumePdf from "../files/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a
          // 2. Oprava cesty pro stahování
          href={resumePdf}
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>
      {/* 3. Oprava cesty pro zobrazení v Document komponentě */}
      <Document
        file={resumePdf}
        loading={<div className="p-4">Loading resume…</div>}
        error={<div className="p-4 text-red-600">Failed to load resume.</div>}
        onLoadError={(err) => console.error("PDF load error:", err)}
      >
        <Page
          pageNumber={1}
          width={Math.min(
            750,
            typeof window !== "undefined" ? window.innerWidth - 80 : 820
          )}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
