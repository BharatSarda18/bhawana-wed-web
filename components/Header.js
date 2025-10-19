"use client"
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { text: 'Home', href: '#home' },
        { text: 'Couple', href: '#couple' },
        { text: 'Events', href: '#events' },
        { text: 'Venue', href: '#venue' },
        { text: 'Contact', href: '#contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-wedding-maroon py-2 shadow-lg' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="relative flex justify-end items-center">
                    {/* Centered Text */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 text-white flex items-center">
                        <span className={`font-great-vibes text-wedding-gold text-3xl font-bold italic transition-all duration-300 ${isScrolled ? 'text-2xl' : 'text-3xl'}`}>
                            श्री गणेशाय नमः
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-white hover:text-wedding-gold transition duration-300 font-poppins"
                            >
                                {link.text}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Navigation Button */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-wedding-maroon">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-white hover:text-wedding-gold transition duration-300 font-poppins text-center py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.text}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;