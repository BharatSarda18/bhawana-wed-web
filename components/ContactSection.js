"use client"
import { motion } from 'framer-motion';
import { User, Users, Phone } from 'lucide-react';

const ContactSection = () => {
  const contacts = [
    {
      title: "Bride's Father",
      name: "Ashok Kumar Sarda",
      phone: "+91 9413769479",
      icon: <User className="text-white h-6 w-6" />
    },
    {
      title: "Bride's Uncle",
      name: "Vimal Kumar Sarda",
      phone: "+91 9510449256",
      icon: <User className="text-white h-6 w-6" />
    },
    {
      title: "Bride's Uncle",
      name: "Kamal Kumar Sarda",
      phone: "+91 98765 43212",
      icon: <Users className="text-white h-6 w-6" />
    },
    {
      title: "Bride's Brother",
      name: "Bharat Sarda",
      phone: "+91 76270647279",
      icon: <Users className="text-white h-6 w-6" />
    }
  ];

  return (
    <section id="contact" className="py-20 bg-wedding-maroon text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-playfair text-white text-4xl font-bold mb-2"> RSVP</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white bg-opacity-10 p-3 sm:p-4 md:p-6 rounded-lg text-center max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-wedding-gold flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Users className="text-white h-6 w-6 sm:h-8 sm:w-8" />
          </div>
          <div className="space-y-3 sm:space-y-4">
            {contacts.map((contact, index) => (
              <div key={index} className="border-b border-wedding-gold border-opacity-30 pb-2 sm:pb-3 last:border-b-0">
                <p className="font-poppins text-base sm:text-lg font-semibold mb-1 break-words">{contact.name}</p>
                <p className="font-poppins text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2 break-all">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" /> 
                  <span className="break-all">{contact.phone}</span>
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      

      </div>
    </section>
  );
};

export default ContactSection;