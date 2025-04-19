"use client"
import { motion } from 'framer-motion';

const GallerySection = () => {
  // For a real site, these would be actual images
  const images = Array(8).fill(null).map((_, i) => ({
    id: i,
    alt: `Wedding Gallery Image ${i + 1}`
  }));

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-wedding-maroon text-4xl font-bold mb-4">Our Gallery</h2>
          <div className="w-24 h-1 mx-auto bg-wedding-gold mb-6"></div>
          <p className="font-poppins text-gray-700 max-w-2xl mx-auto">
            Cherishing our beautiful moments together.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-64 gallery-img">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 8a1 1 0 0 1 1-1h1V6a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H8v1a1 1 0 0 1-2 0V9H5a1 1 0 0 1-1-1Z"/>
                    <path d="M9.3 20H5a2 2 0 0 1-2-2V8c0-.5.2-1 .6-1.4.4-.4.9-.6 1.4-.6h1V5c0-.5.2-1 .6-1.4.4-.4.9-.6 1.4-.6.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v1h1c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v.3c.3-.2.7-.3 1-.3h.8V5c0-.5.2-1 .6-1.4.4-.4.9-.6 1.4-.6.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v1h1c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v.3c.7 0 1.4.2 2 .7.6.4 1 1 1.2 1.8.2.7.2 1.5-.2 2.2-.3.7-.8 1.2-1.5 1.5.3.7.3 1.5 0 2.2-.2.7-.7 1.3-1.3 1.8.3.7.3 1.5 0 2.2-.3.7-.8 1.3-1.4 1.7-.7.4-1.4.6-2.2.6h-1.2c-.5 0-1.1-.1-1.6-.3-.5.2-1 .3-1.5.3h-5Zm0-2h5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.4-.4-.9-.6-1.4-.6h-1c-.5 0-1-.2-1.4-.6-.4-.4-.6-.9-.6-1.4 0-.5.2-1 .6-1.4.4-.4.9-.6 1.4-.6h1c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.4-.4-.9-.6-1.4-.6h-1c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7 0 .3.1.5.3.7.2.2.4.3.7.3.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7h2c0 .7-.3 1.3-.8 1.8-.5.5-1.1.8-1.8.8H12c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7 0 .3.1.5.3.7.2.2.4.3.7.3h1c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3h-1c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7 0 .3.1.5.3.7.2.2.4.3.7.3h1c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3h-5c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7v-8.7c-.7 0-1.3-.3-1.8-.8-.5-.5-.7-1.1-.8-1.8h2c0 .3.1.5.3.7.2.2.4.3.7.3.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7H9c0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.7-.3h-.8V8h.1v8.9c0 .3.1.6.3.8.2.2.5.3.7.3Z"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;