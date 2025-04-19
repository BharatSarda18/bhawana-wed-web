import ContactSection from '@/components/ContactSection'
import CoupleSection from '@/components/CoupleSection'
import Divider from '@/components/Divider'
import EventsSection from '@/components/EventsSection'
import Footer from '@/components/Footer'
import GallerySection from '@/components/GallerySection'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import VenueSection from '@/components/VenueSection'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <CoupleSection />
      <Divider/>
      <EventsSection />
      {/* <GallerySection /> */}
      <VenueSection />
      <Divider/>
      <ContactSection />
      <Footer/>
    </>
  )
}
