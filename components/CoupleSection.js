"use client"
import { motion } from 'framer-motion';

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
          <p className="font-playfair italic text-gray-700 max-w-2xl mx-auto text-2xl text-wedding-maroon">
             You are cordially invited to grace the auspicious occasion of our children's wedding.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20">

         {/* Bride */}
         <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:w-1/3 border border-wedding-gold border-opacity-20 to-white rounded-xl bg-gradient-to-br from-wedding-ivory shadow-lg p-4 transform transition-all duration-300 ease-out hover:-translate-y-1 hover:border-opacity-40"
          >
           
            <h3 className="font-playfair text-wedding-maroon text-3xl font-bold mb-2">Bhawna</h3>
            <p className="font-poppins text-gray-700 max-w-sm mx-auto mb-4">
            Grand D/o Smt. Geeta Devi - Late Shri Loonkaran Ji Sarda <br></br>D/o Smt. Chandrakala Devi - Shri Ashok Kumar Ji Sarda.
            </p>
          </motion.div>

         {/* Groom */}
         <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
             className="text-center md:w-1/3 border border-wedding-gold border-opacity-20 to-white rounded-xl bg-gradient-to-br from-wedding-ivory shadow-lg p-4 transform transition-all duration-300 ease-out hover:-translate-y-1 hover:border-opacity-40"
          >
            <h3 className="font-playfair text-wedding-maroon text-3xl font-bold mb-2">Lalit</h3>
            <p className="font-poppins text-gray-700 max-w-sm mx-auto mb-4">
            Grand S/o Late Smt. Sodhra Devi - Late Shri Madan Gopal Ji Mundhra <br></br>S/o Smt. Chanda Devi - Shri Pawan Kumar Ji Mundhra.
            </p>
            {/* <p className="font-poppins text-gray-700 max-w-sm mx-auto mb-4">
            Grandson of Late Shri Madan gopal Ji Mundhra and Late Shrimati Sodra Devi Ji Mundhra, Son of Shri Pawan Ji Mundhra and Shrimati Chanda Devi Ji Mundhra.
            </p> */}
          </motion.div>
          
         

        </div>
      </div>
    </section>
  );
};

export default CoupleSection;