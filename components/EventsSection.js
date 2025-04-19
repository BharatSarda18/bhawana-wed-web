"use client"
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      title: "Haldi Ceremony",
      date: "December 9, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Chhalani Palace, Bikaner",
      description: "A traditional pre-wedding ritual where turmeric paste is applied to the bride and groom for its purifying and beautifying properties."
    },
    {
      title: "Mehndi Ceremony",
      date: "December 9, 2025",
      time: "4:00 PM - 9:00 PM",
      location: "Chhalani Palace, Bikaner",
      description: "An exciting ceremony where the bride's hands and feet are adorned with intricate henna designs symbolizing joy, beauty, and spiritual awakening."
    },
    {
      title: "Sangeet Night",
      date: "December 10, 2025",
      time: "7:00 PM - 12:00 AM",
      location: "Chhalani Palace, Bikaner",
      description: "A night of music, dance, and celebration where both families come together to enjoy performances and festivities."
    },
    {
      title: "Wedding Ceremony",
      date: "December 11, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "Chhalani Palace, Bikaner",
      description: "The main wedding ceremony with all traditional Hindu rituals including Jaimala, Pheras, and Vidaai."
    },
    {
      title: "Reception",
      date: "December 11, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "Chhalani Palace, Bikaner",
      description: "A grand celebration with dinner, dancing, and entertainment to celebrate the newlyweds."
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-wedding-maroon text-4xl font-bold mb-4">Wedding Events</h2>
          <div className="w-24 h-1 mx-auto bg-wedding-gold mb-6"></div>
          <p className="font-poppins text-gray-700 max-w-2xl mx-auto">
            Join us for these joyous celebrations as we embark on our journey together.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Connector */}
          <div className="timeline-connector hidden md:block"></div>
          
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex timeline-item items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Ball */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
                <div className="w-6 h-6 rounded-full bg-wedding-gold"></div>
              </div>
              
              {/* Content */}
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                <div className="bg-wedding-ivory p-6 rounded-lg shadow-md">
                  <h3 className="font-playfair text-wedding-maroon text-2xl font-bold mb-3">{event.title}</h3>
                  <p className="font-poppins text-gray-600 mb-2 flex items-center gap-2 justify-center md:justify-start">
                    <Calendar className="text-wedding-gold h-4 w-4" /> {event.date}
                  </p>
                  <p className="font-poppins text-gray-600 mb-2 flex items-center gap-2 justify-center md:justify-start">
                    <Clock className="text-wedding-gold h-4 w-4" /> {event.time}
                  </p>
                  <p className="font-poppins text-gray-600 mb-3 flex items-center gap-2 justify-center md:justify-start">
                    <MapPin className="text-wedding-gold h-4 w-4" /> {event.location}
                  </p>
                  <p className="font-poppins text-gray-700">{event.description}</p>
                </div>
              </div>
              
              {/* Empty Space for Timeline Balance */}
              <div className="md:w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;