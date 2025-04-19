"use client"
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-wedding-maroon text-white text-center">
      <div className="container mx-auto px-4">
        <div className="font-great-vibes text-4xl text-wedding-gold mb-4">Bhawana & Lalit</div>
        
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="#home" 
            className="font-poppins text-sm hover:text-wedding-gold transition duration-300"
          >
            Home
          </a>
          <a 
            href="#couple" 
            className="font-poppins text-sm hover:text-wedding-gold transition duration-300"
          >
            Couple
          </a>
          <a 
            href="#events" 
            className="font-poppins text-sm hover:text-wedding-gold transition duration-300"
          >
            Events
          </a>
          <a 
            href="#venue" 
            className="font-poppins text-sm hover:text-wedding-gold transition duration-300"
          >
            Venue
          </a>
          <a 
            href="#contact" 
            className="font-poppins text-sm hover:text-wedding-gold transition duration-300"
          >
            Contact
          </a>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-center space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-wedding-gold transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-wedding-maroon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.35c0 .732.593 1.325 1.325 1.325h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-wedding-gold transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-wedding-maroon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-wedding-gold transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-wedding-maroon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="font-poppins text-sm flex items-center justify-center">
          <span>&copy; {currentYear} Bhawana & Lalit. Made with</span>
          <Heart className="h-4 w-4 text-wedding-gold mx-1" />
          <span>for special day.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;