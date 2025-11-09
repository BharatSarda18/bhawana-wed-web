"use client";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
import Header from "@/components/Header";
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
      { text: "Chhalani Palace Map", url: "https://maps.app.goo.gl/Xg2pjywPTSdcUymz8" },
      { text: "Daga Guest House Map", url: "https://maps.app.goo.gl/YBdkvRGEqtAhV4Dd7?g_st=aw" },
      { text: "Join us on Instagram: @lalit_bha_gaya", url: "https://www.instagram.com/lalit_bha_gaya?igsh=MWV1NzhqY2Z4ZzA5dQ==" }
    ];

    // Set text color to white and font to bold
    pdf.setTextColor(255, 255, 255); // White color
    pdf.setFont('helvetica', 'bold'); // Bold font

    // Layout: First line - 2 venue links (left and right), Second line - Instagram link (center)
    const firstLineY = linksTextY;
    const lineSpacing = fontSize + 2; // Spacing between lines
    const secondLineY = linksTextY - lineSpacing;
    const margin = 5; // Left and right margin in mm
    const textHeight = fontSize * 0.35; // Approximate text height

    // First line: Chhalani Palace Map (left) and Daga Guest House Map (right)
    const leftLink = cleanLinks[0]; // Chhalani Palace Map
    const rightLink = cleanLinks[1]; // Daga Guest House Map
    
    if (leftLink && typeof leftLink === 'object' && leftLink.url) {
      const textWidth = pdf.getTextWidth(leftLink.text);
      const linkX = margin; // Left position
      pdf.text(leftLink.text, linkX, firstLineY);
      pdf.link(linkX, firstLineY - textHeight, textWidth, textHeight, { url: leftLink.url });
    }

    if (rightLink && typeof rightLink === 'object' && rightLink.url) {
      const textWidth = pdf.getTextWidth(rightLink.text);
      const linkX = pdfWidth - textWidth - margin; // Right position
      pdf.text(rightLink.text, linkX, firstLineY);
      pdf.link(linkX, firstLineY - textHeight, textWidth, textHeight, { url: rightLink.url });
    }

    // Second line: Instagram link (center)
    const centerLink = cleanLinks[2]; // Bhawana & Lalit's Wedding
    if (centerLink && typeof centerLink === 'object' && centerLink.url) {
      const textWidth = pdf.getTextWidth(centerLink.text);
      const linkX = (pdfWidth - textWidth) / 2; // Center position
      pdf.text(centerLink.text, linkX, secondLineY);
      pdf.link(linkX, secondLineY - textHeight, textWidth, textHeight, { url: centerLink.url });
    }

    pdf.save("bhawana-wedding-invite.pdf");

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
      { text: "Chhalani Palace Map", url: "https://maps.app.goo.gl/Xg2pjywPTSdcUymz8" },
      { text: "Daga Guest House Map", url: "https://maps.app.goo.gl/YBdkvRGEqtAhV4Dd7?g_st=aw" },
      { text: "Bhawana & Lalit's Wedding", url: "https://www.instagram.com/lalit_bha_gaya?igsh=MWV1NzhqY2Z4ZzA5dQ==" }
    ];

    // Get canvas context to draw text overlay
    const ctx = canvas.getContext("2d");
    const scale = 2; // Match the html2canvas scale

    // Calculate position for text at bottom
    const fontSize = 24 * scale; // Larger font size for visibility
    const padding = 20 * scale; // Padding from bottom
    const firstLineY = canvas.height - padding;
    const lineSpacing = fontSize + 10 * scale; // Spacing between lines
    const secondLineY = firstLineY - lineSpacing;
    const margin = 20 * scale; // Left and right margin

    // Set text style (white, bold)
    ctx.fillStyle = "white";
    ctx.font = `bold ${fontSize}px Helvetica, Arial, sans-serif`;
    ctx.textBaseline = "bottom";

    // Helper function to draw text with background and stroke
    const drawTextWithBackground = (text, x, y, align = 'center') => {
      ctx.textAlign = align;
      const textMetrics = ctx.measureText(text);
      const textWidth = textMetrics.width;
      const textHeight = fontSize;
      const bgPadding = 10 * scale;

      // Draw semi-transparent background behind text
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      if (align === 'center') {
        ctx.fillRect(
          x - textWidth / 2 - bgPadding,
          y - textHeight - bgPadding,
          textWidth + bgPadding * 2,
          textHeight + bgPadding * 2
        );
      } else if (align === 'left') {
        ctx.fillRect(
          x - bgPadding,
          y - textHeight - bgPadding,
          textWidth + bgPadding * 2,
          textHeight + bgPadding * 2
        );
      } else if (align === 'right') {
        ctx.fillRect(
          x - textWidth - bgPadding,
          y - textHeight - bgPadding,
          textWidth + bgPadding * 2,
          textHeight + bgPadding * 2
        );
      }

      // Draw text with stroke (outline) first for better visibility
      ctx.strokeStyle = "rgba(0, 0, 0, 0.9)";
      ctx.lineWidth = 3 * scale;
      ctx.lineJoin = "round";
      ctx.miterLimit = 2;
      ctx.strokeText(text, x, y);

      // Then draw the filled text on top
      ctx.fillStyle = "white";
      ctx.fillText(text, x, y);
    };

    // First line: Chhalani Palace Map (left) and Daga Guest House Map (right)
    const leftLink = cleanLinks[0]; // Chhalani Palace Map
    const rightLink = cleanLinks[1]; // Daga Guest House Map
    
    if (leftLink && typeof leftLink === 'object' && leftLink.url) {
      drawTextWithBackground(leftLink.text, margin, firstLineY, 'left');
    }

    if (rightLink && typeof rightLink === 'object' && rightLink.url) {
      drawTextWithBackground(rightLink.text, canvas.width - margin, firstLineY, 'right');
    }

    // Second line: Instagram link (center)
    const centerLink = cleanLinks[2]; // Bhawana & Lalit's Wedding
    if (centerLink && typeof centerLink === 'object' && centerLink.url) {
      drawTextWithBackground(centerLink.text, canvas.width / 2, secondLineY, 'center');
    }

    // Convert canvas to image data URL
    const imgData = canvas.toDataURL("image/png");

    // Create a temporary link element to download the image
    const downloadLink = document.createElement("a");
    downloadLink.download = "bhawana-wedding-invite.png";
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


