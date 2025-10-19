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

export default function Home() {
  const pageRef = useRef();

  const handleDownloadPDF = async () => {
    const element = pageRef.current;

    // // Wait a moment to ensure DOM is fully painted
    // await new Promise((resolve) => setTimeout(resolve, 500));

    const canvas = await html2canvas(element, {
      scale: 2, // better quality
      useCORS: true,
      allowTaint: true,
      scrollY: -window.scrollY, // capture from top
      windowWidth: document.documentElement.offsetWidth,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    // If content height > A4, split across pages
    let heightLeft = pdfHeight;
    let position = 0;

    while (heightLeft > 0) {
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();
      if (heightLeft > 0) pdf.addPage();
      position -= pdf.internal.pageSize.getHeight();
    }

    pdf.save("wedding-invite.pdf");
  };

  return (
    <>
      <div ref={pageRef}>
        <Header />
        <HeroSection />
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


