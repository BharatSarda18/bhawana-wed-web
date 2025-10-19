"use client"
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
// import dagaPalace from "../assets/images/dagaGuestHouse.jpg"

const VenueSection = () => {
    return (
        <section id="venue" className="py-20 bg-wedding-ivory">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-playfair text-wedding-maroon text-4xl font-bold mb-4">Wedding Venue</h2>
                    <div className="w-24 h-1 mx-auto bg-wedding-gold mb-6"></div>

                </motion.div>

                <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
                    {/* Wedding Ceremony Venue */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="w-full h-80 bg-gray-300">
                            <img className="h-80 w-full"  src="/images/chhalaniPalace.jpeg" alt="Chhalani Palace"/>
                        </div>
                        <div className="p-6">
                            <p className="font-poppins text-gray-600 mb-6 flex items-start gap-2">
                                <MapPin className="text-wedding-gold h-4 w-4 mt-0.5 flex-shrink-0" />Chhalani Palace, Gangashahar, Bikaner
                            </p>
                            <a
                                href="https://maps.app.goo.gl/Xg2pjywPTSdcUymz8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center font-poppins text-wedding-gold border border-wedding-gold hover:bg-wedding-gold hover:text-white transition duration-300 rounded-full py-2 px-6"
                            >
                                <ArrowRight className="mr-2 h-4 w-4" /> Get Directions
                            </a>
                        </div>
                    </motion.div>

                    {/* Reception Venue */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="w-full h-80 bg-gray-300">
                            <img className="h-80 w-full" src="/images/dagaGuestHouse.jpg" alt="Daga Guest House"/>

                        </div>
                        <div className="p-6">
                            <p className="font-poppins text-gray-600 mb-6 flex items-start gap-2">
                                <MapPin className="text-wedding-gold h-4 w-4 mt-0.5 flex-shrink-0" /> Daga Guest House, Gangashahar, Bikaner
                            </p>

                            <a
                                href="https://maps.app.goo.gl/Yps6nKGFReHo7e3z5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center font-poppins text-wedding-gold border border-wedding-gold hover:bg-wedding-gold hover:text-white transition duration-300 rounded-full py-2 px-6"
                            >
                                <ArrowRight className="mr-2 h-4 w-4" /> Get Directions
                            </a>
                        </div>
                    </motion.div>
                </div>


            </div>
        </section>
    );
};

export default VenueSection;