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
      phone: "+91 7627064727",
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
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-white text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 mx-auto bg-wedding-gold mb-6"></div>
          <p className="font-poppins max-w-2xl mx-auto">
            If you have any questions or need assistance, please don't hesitate to reach out to us.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 p-6 rounded-lg text-center"
            >
              <div className="w-20 h-20 rounded-full bg-wedding-gold flex items-center justify-center mx-auto mb-4">
                {contact.icon}
              </div>
              <h3 className="font-playfair text-wedding-gold text-xl mb-2">{contact.title}</h3>
              <p className="font-poppins mb-2">{contact.name}</p>
              <p className="font-poppins mb-2 flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" /> {contact.phone}
              </p>
            </motion.div>
          ))}
        </div>
        
   
      </div>
    </section>
  );
};

export default ContactSection;