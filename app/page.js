"use client";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import Divider from "@/components/Divider";
import EventsSection from "@/components/EventsSection";
import VenueSection from "@/components/VenueSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GaneshJiSection from '@/components/GaneshJiSection'

export default function Home() {
  const pageRef = useRef();

  const handleDownloadPDF = async () => {
    const element = pageRef.current;

    // Wait a moment to ensure DOM is fully painted
    await new Promise((resolve) => setTimeout(resolve, 500));

    const canvas = await html2canvas(element, {
      scale: 2, // higher scale for better quality
      useCORS: true,
      allowTaint: true,
      scrollY: -window.scrollY, // capture from top
      windowWidth: document.documentElement.offsetWidth,
      height: element.scrollHeight, // capture full height
    });

    const imgData = canvas.toDataURL("image/png");

    // Calculate PDF dimensions based on content
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // Convert pixels to mm (assuming 96 DPI)
    const pixelsToMm = 25.4 / 96;
    const pdfWidth = imgWidth * pixelsToMm;
    const pdfHeight = imgHeight * pixelsToMm;

    // Create PDF with custom dimensions matching content
    const pdf = new jsPDF({
      orientation: pdfWidth > pdfHeight ? "landscape" : "portrait",
      unit: "mm",
      format: [pdfWidth, pdfHeight]
    });

    // Add the image to PDF at full size (no scaling needed)
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    // Add clean links text at the bottom of PDF (horizontal layout)
    const linksTextY = pdfHeight - 8; // 8mm from bottom
    const fontSize = 10; // Increased font size

    pdf.setFontSize(fontSize);

    // Clean links with display text and URLs - arranged horizontally
    const cleanLinks = [
      { text: "Chhalani Palace Map", url: "https://maps.app.goo.gl/Xg2pjywPTSdcUymz8" }
    ];

    // Set text color to white and font to bold
    pdf.setTextColor(255, 255, 255); // White color
    pdf.setFont('helvetica', 'bold'); // Bold font

    cleanLinks.forEach((link, index) => {
      if (typeof link === 'object' && link.url) {
        // Calculate text width to center the link
        const textWidth = pdf.getTextWidth(link.text);
        const linkX = (pdfWidth - textWidth) / 2; // Center the text

        // For clickable link, add text first
        pdf.text(link.text, linkX, linksTextY);
        // Then create clickable link area that opens in new tab
        const textHeight = fontSize * 0.35; // Approximate text height
        pdf.link(linkX, linksTextY - textHeight, textWidth, textHeight, { url: link.url });
      }
    });

    pdf.save("wedding-invite.pdf");

  };

  return (
    <>
      <div ref={pageRef}>
        <Header />
        <GaneshJiSection />
        {/* <HeroSection /> */}
        <CoupleSection />
        <Divider />
        <EventsSection />
        <Divider />
        <VenueSection />
        <Divider />
        <ContactSection />
        {/* <Footer /> */}
      </div>

      <button
        onClick={handleDownloadPDF}
        className="fixed bottom-5 right-5 bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md"
      >
        Download PDF
      </button>
    </>
  );
}


