// src/TextToPdf.js
import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';

const TextToPdf = ({ textContent }) => {
  const componentRef = useRef();

  const handlePrint = () => {
    const pdf = new jsPDF();
    pdf.text(textContent, 10, 10);
    pdf.save('output.pdf');
  };

  return (
    <div>
      <div ref={componentRef}>
        <pre>{textContent}</pre>
      </div>
      <button onClick={handlePrint}>Generate PDF</button>
    </div>
  );
};

export default TextToPdf;
