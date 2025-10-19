import ContactSection from '@/components/ContactSection'
import CoupleSection from '@/components/CoupleSection'
import Divider from '@/components/Divider'
import EventsSection from '@/components/EventsSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import VenueSection from '@/components/VenueSection'
import GaneshJiSection from '@/components/GaneshJiSection'

export default function Home() {
  return (
    <>
      <Header />
      <GaneshJiSection/>
      <HeroSection />
      <CoupleSection />
      <Divider/>
      <EventsSection />
      <VenueSection />
      <Divider/>
      <ContactSection />
      <Footer/>
    </>
  )
}
