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
    
    // Create clickable areas for venue sections (working method)
    const halfWidth = pdfWidth / 2;
    const venueSectionHeight = pdfHeight * 0.6;
    
    try {
      // First venue (Chhalani Palace) - left half
      if (typeof pdf.addLink === 'function') {
        const link1 = pdf.addLink(0, 0, halfWidth, venueSectionHeight, "https://maps.app.goo.gl/Xg2pjywPTSdcUymz8");
        const link2 = pdf.addLink(halfWidth, 0, halfWidth, venueSectionHeight, "https://maps.app.goo.gl/Yps6nKGFReHo7e3z5");
        console.log('Created venue links using addLink method:', { link1, link2 });
      } else {
        pdf.link(0, 0, halfWidth, venueSectionHeight, {
          url: "https://maps.app.goo.gl/Xg2pjywPTSdcUymz8"
        });
        
        pdf.link(halfWidth, 0, halfWidth, venueSectionHeight, {
          url: "https://maps.app.goo.gl/Yps6nKGFReHo7e3z5"
        });
        console.log('Created venue links using link method');
      }
      
      // Add Instagram link for footer section
      const footerHeight = pdfHeight * 0.15; // Approximate footer height (15% of total)
      const footerY = pdfHeight - footerHeight; // Position at bottom
      
      if (typeof pdf.addLink === 'function') {
        const instagrContactSectionamLink = pdf.addLink(0, footerY, pdfWidth, footerHeight, "https://www.instagram.com/lalit_bha_gaya?igsh=MWV1NzhqY2Z4ZzA5dQ==");
        console.log('Created Instagram link using addLink method:', instagramLink);
      } else {
        pdf.link(0, footerY, pdfWidth, footerHeight, {
          url: "https://www.instagram.com/lalit_bha_gaya?igsh=MWV1NzhqY2Z4ZzA5dQ=="
        });
        console.log('Created Instagram link using link method');
      }
      
    } catch (error) {
      console.error('Error creating PDF links:', error);
    }
    
    console.log('PDF dimensions:', { pdfWidth, pdfHeight, halfWidth, venueSectionHeight });
    
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
        <VenueSection />
        <Divider />
        <ContactSection />
        <Footer />
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


