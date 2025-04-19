"use client"
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const CoupleSection = () => {
  return (
    <section id="couple" className="py-20 bg-wedding-ivory">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-wedding-maroon text-4xl font-bold mb-4">Happy Couple</h2>
          <div className="w-24 h-1 mx-auto bg-wedding-gold mb-6"></div>
          <p className="font-poppins text-gray-700 max-w-2xl mx-auto">
             We would be honored to have you join us on special day.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20">

             {/* Bride */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:w-1/3"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden mx-auto mb-6 border-4 border-wedding-gold">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/>
                  <path d="M21 21v-2a9 9 0 0 0-9-9h0a9 9 0 0 0-9 9v2"/>
                </svg>
              </div>
            </div>
            <h3 className="font-playfair text-wedding-maroon text-2xl font-bold mb-2">Bhawana Sarda</h3>
            <h4 className="font-poppins text-wedding-gold text-lg mb-4">The Bride</h4>
            <p className="font-poppins text-gray-700 max-w-sm mx-auto mb-4">
               Granddaughter of Late Shri Lookaran Ji Sarda and Shrimati Geeta Devi Sarda, Daughter of Shri Ashok Kumar Ji Sarda and Shrimati ChandraKala Devi Sarda.
            </p>
          </motion.div>


          
          
          {/* Heart Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-wedding-maroon flex items-center justify-center">
              <Heart className="text-white h-8 w-8" />
            </div>
          </motion.div>


          {/* Groom */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:w-1/3"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden mx-auto mb-6 border-4 border-wedding-gold">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/>
                  <path d="M21 21v-2a9 9 0 0 0-9-9h0a9 9 0 0 0-9 9v2"/>
                </svg>
              </div>
            </div>
            <h3 className="font-playfair text-wedding-maroon text-2xl font-bold mb-2">Lalit Mundhara</h3>
            <h4 className="font-poppins text-wedding-gold text-lg mb-4">The Groom</h4>
            <p className="font-poppins text-gray-700 max-w-sm mx-auto mb-4">
            Grandson of Late Shri xyz Ji Mundhara and Shrimati xyz Devi Mundhara, Daughter of Shri Pawan Ji Mundhara and Shrimati xyz Devi Mundhara.
            </p>
          </motion.div>
          
         

        </div>
      </div>
    </section>
  );
};

export default CoupleSection;