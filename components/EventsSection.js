"use client"
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      day: "Wednesday",
      date: "10th December 2025",
      description: "शुरुआत हल्दी से, मिलेंगे खुशी से",
      title: "हल्दी और लगन समारोह",
      time: "9:00 AM onwards"
    },
    
    {
      day: "Wednesday",
      date: "10th December 2025",
      description: "संगीत की रात, खुशियों की बारात",
      title: "संगीत संध्या", 
      time: "6:00 PM onwards"
    },
    {
      day: "Thursday",
      date: "11th December 2025",
      description: "बत्तीसी लेके बहना आई, भाई बाँटे खूब बधाई",
      title: "बत्तीसी", 
      time: "10:00 AM onwards"
    },
    {
      day: "Thursday",
      date: "11th December 2025",
      description: "प्यारा वीरा, संग लेके आया है मायरा",
      title: "मायरा", 
      time: "11:00 AM onwards"
    },
    {
      day: "Thursday",
      date: "11th December 2025",
      description: "सात जन्मों का साथ, सात वचनों के साथ",
      title: "बारात स्वागत एवं शुभ विवाह",
      time: "7:00 PM onwards"
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-wedding-ivory to-white rounded-xl shadow-lg overflow-hidden border border-wedding-gold border-opacity-20"
            >
              {/* Decorative top border */}
              <div className="h-2 bg-gradient-to-r from-wedding-gold to-wedding-maroon"></div>
              
              <div className="p-6 text-center">
                {/* Day */}
                <p className="font-poppins text-wedding-maroon text-sm font-medium mb-1">
                  {event.day}
                </p>
                
                {/* Date */}
                <p className="font-poppins text-gray-800 text-lg font-semibold mb-3">
                  {event.date}
                </p>
                
                {/* Hindi Description */}
                <p className="font-poppins text-gray-700 text-sm mb-4 italic">
                  {event.description}
                </p>
                
                {/* Event Title */}
                <h3 className="font-playfair text-wedding-maroon text-2xl font-bold mb-3">
                  {event.title}
                </h3>
                
                {/* Time */}
                <p className="font-poppins text-wedding-gold text-base font-medium flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  {event.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;