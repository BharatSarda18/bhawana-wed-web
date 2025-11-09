"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const HeroSection = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const weddingDate = new Date('December 11, 2025 11:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      
      if (distance < 0) {
        // Wedding day has passed
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const countdownItems = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="z-10 text-center text-white">
      
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 grid grid-cols-3 grid-rows-3 gap-y-2 md:gap-y-4 max-w-5xl mx-auto"
        >
          {/* Top-left name */}
          <h1 className="col-start-1 font-wedding row-start-1 justify-self-start text-left font-great-vibes text-6xl md:text-8xl text-wedding-maroon drop-shadow-lg">
            Bhawna
          </h1>

          {/* Center "Weds" */}
          <h2 className="col-start-2 row-start-2 justify-self-center self-center font-great-vibes text-3xl md:text-5xl text-wedding-gold tracking-wide">
            Weds
          </h2>

          {/* Bottom-right name */}
          <h1 className="col-start-3 font-wedding row-start-3 justify-self-end text-right font-great-vibes text-6xl md:text-8xl text-wedding-maroon drop-shadow-lg">
            Lalit
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12"
        >
          <div className="flex items-center">
            <a 
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Bhawana%20%26%20Lalit%27s%20Wedding&dates=20251211T110000Z/20251211T220000Z&details=Join%20us%20for%20the%20wedding%20celebration%20of%20Bhawana%20and%20Lalit%20on%20December%2011%2C%202025%20in%20Bikaner&location=Bikaner%2C%20Rajasthan%2C%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-poppins text-2xl text-wedding-maroon hover:text-wedding-gold transition-colors duration-300 cursor-pointer decoration-wedding-gold hover:decoration-wedding-maroon"
            >
              <Calendar className="h-5 w-5 mr-2" />
              December 11, 2025
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-black bg-opacity-40 p-8 rounded-lg mt-10"
        >
          <h3 className="font-playfair text-2xl mb-6">Special Day Countdown</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {countdownItems.map((item, index) => (
              <div key={index} className="bg-wedding-maroon bg-opacity-60 p-4 rounded-lg">
                <div className="font-poppins text-3xl md:text-4xl font-bold text-wedding-gold">{item.value}</div>
                <div className="font-poppins text-sm uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12"
        >
          <a 
            href="#events" 
            className="inline-block bg-[#D4AF37] hover:bg-[#b38a07] border border-wedding-gold hover:text-wedding-maroon transition duration-300 text-wedding-maroon font-poppins font-bold py-3 px-8 rounded-full"
          >
            View Events
          </a>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-full h-12 divider"></div>
      <div className="absolute left-0 bottom-0 w-full h-12 divider transform rotate-180"></div>
    </section>
  );
};

export default HeroSection;