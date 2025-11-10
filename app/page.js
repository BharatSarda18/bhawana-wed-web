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
    const fontSize = 20; // Increased font size

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

  const handleDownloadImage = async () => {
    const element = pageRef.current;

    // Wait a moment to ensure DOM is fully painted
    await new Promise((resolve) => setTimeout(resolve, 500));

    const canvas = await html2canvas(element, {
      scale: 2, // higher scale for better quality
      useCORS: true,
      allowTaint: true,
      scrollY: -window.scrollY, // capture from top
      windowWidth: document.documentElement.offsetWidth,
      height: element.scrollHeight, // capture full height - entire content in one long image
    });

    // Clean links with display text and URLs
    const cleanLinks = [
      { text: "Chhalani Palace Map", url: "https://maps.app.goo.gl/Xg2pjywPTSdcUymz8" }
    ];

    // Get canvas context to draw text overlay
    const ctx = canvas.getContext("2d");
    const scale = 2; // Match the html2canvas scale
    
    // Calculate position for text at bottom
    const fontSize = 24 * scale; // Larger font size for visibility
    const padding = 20 * scale; // Padding from bottom
    const textY = canvas.height - padding;
    
    // Set text style (white, bold, centered)
    ctx.fillStyle = "white";
    ctx.font = `bold ${fontSize}px Helvetica, Arial, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    
    // Draw cleanLinks text with background and stroke for visibility
    cleanLinks.forEach((linkItem) => {
      if (typeof linkItem === 'object' && linkItem.url) {
        // Center the text horizontally
        const textX = canvas.width / 2;
        
        // Measure text to create background
        const textMetrics = ctx.measureText(linkItem.text);
        const textWidth = textMetrics.width;
        const textHeight = fontSize;
        
        // Draw semi-transparent background behind text
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        const bgPadding = 10 * scale;
        ctx.fillRect(
          textX - textWidth / 2 - bgPadding,
          textY - textHeight - bgPadding,
          textWidth + bgPadding * 2,
          textHeight + bgPadding * 2
        );
        
        // Draw text with stroke (outline) first for better visibility
        ctx.strokeStyle = "rgba(0, 0, 0, 0.9)";
        ctx.lineWidth = 3 * scale;
        ctx.lineJoin = "round";
        ctx.miterLimit = 2;
        ctx.strokeText(linkItem.text, textX, textY);
        
        // Then draw the filled text on top
        ctx.fillStyle = "white";
        ctx.fillText(linkItem.text, textX, textY);
      }
    });

    // Convert canvas to image data URL
    const imgData = canvas.toDataURL("image/png");

    // Create a temporary link element to download the image
    const downloadLink = document.createElement("a");
    downloadLink.download = "wedding-invite.png";
    downloadLink.href = imgData;
    
    // Trigger download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
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

      <div className="fixed bottom-5 right-5 flex flex-col gap-2">
        <button
          onClick={handleDownloadPDF}
          className="bg-pink-500 text-white py-1.5 px-3 rounded-lg shadow-md hover:bg-pink-600 transition"
        >
          Download PDF
        </button>
        <button
          onClick={handleDownloadImage}
          className="bg-blue-500 text-white py-1.5 px-3 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Download Image
        </button>
      </div>
    </>
  );
}


