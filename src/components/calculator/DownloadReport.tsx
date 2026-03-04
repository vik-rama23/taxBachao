"use client";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function DownloadReport() {
  const downloadPDF = async () => {
    const element = document.getElementById(
      "tax-report"
    );

    if (!element) return;

    const canvas = await html2canvas(element);

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 190;
    const imgHeight =
      (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);

    pdf.save("TaxBachao_Report.pdf");
  };

  return (
    <button
      onClick={downloadPDF}
      className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
    >
      Download Tax Report
    </button>
  );
}
