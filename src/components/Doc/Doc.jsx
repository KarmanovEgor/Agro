import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import reg from "../../Documents/svidReg.pdf";
import inn from "../../Documents/svidINN.pdf";
import "./Doc.css";
import { docsContent } from "../constants/constants";
import { useLocation } from "react-router-dom";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Doc() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const location = useLocation();
  const { doc } = docsContent[location.pathname] || {};
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <section className="documents page__documents">
        <h2 className="documents__title">{doc}</h2>
        <div className="documents__container">
          <Document file={reg} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber}  />
          </Document>
          <Document file={inn} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber}  />
          </Document>
        </div>
        <p className="documents__page">
          Страница {pageNumber} из {numPages}
        </p>
      </section>
    </>
  );
}
