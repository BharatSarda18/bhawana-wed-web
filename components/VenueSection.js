"use client"
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";

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
                    <p className="font-poppins text-gray-700 max-w-2xl mx-auto">
                        Join us at these beautiful locations to celebrate special day.
                    </p>
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
                        <div className="w-full h-60 bg-gray-300">
                        
                            <img className="h-60 w-full"
                                //   src="https://lh3.googleusercontent.com/gps-cs-s/AB5caB-rVOAgnQ-mg7OSp_6j9b73a0eIy4kKCx2fd5sxG-e6HEKE03gqhzy98gmKRja4k87vIJ48o3ehqcdKQWZXJxFua3qto4lehtWubJ8BtFc7A7987tVrAMmiZfXagnW9poaytk7C=w243-h174-n-k-no-nu"
                                src="https://lh3.googleusercontent.com/gps-cs-s/AB5caB8TVQMP21AUkbSg0Ls5uM43malYvYjb0Vc47ER2u1XnAu3lEq5-iGJLitoqDk0BcoD1uc1mgYyUr8kR7aUYxWyDsCyTX9-dyDbhx02dy1VMcgaSKI8XHSKDTtfepPh6B-w_hY8H=s680-w680-h510"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-4">

                                <h3 className="font-playfair text-wedding-red text-2xl">Wedding Ceremony</h3>
                            </div>
                            <p className="font-poppins text-gray-600 mb-2 flex items-center gap-2">
                                <MapPin className="text-wedding-gold h-4 w-4" />Chhalani Palace
                            </p>
                            <p className="font-poppins text-gray-600 mb-2 flex items-center gap-2">
                                <MapPin className="text-wedding-gold h-4 w-4" /> Nokha Road , Bikaner
                            </p>
                            <p className="font-poppins text-gray-600 mb-4 flex items-center gap-2">
                                <Clock className="text-wedding-gold h-4 w-4" />10 December 2025 to 12 December 2025
                            </p>
                            <p className="font-poppins text-gray-700 mb-6">
                                An elegant venue with traditional decor for the sacred wedding ceremony with all rituals.
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
                        <div className="w-full h-60 bg-gray-300">
                            <img className="h-60 w-full"
                                src=" https://ak-d.tripcdn.com/images/02260120009c3k1zr360F_R_960_660_R5_D.jpg"
                            />

                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-4">

                                <h3 className="font-playfair text-wedding-red text-2xl">Wedding Reception</h3>
                            </div>
                            <p className="font-poppins text-gray-600 mb-2 flex items-center gap-2">
                                <MapPin className="text-wedding-gold h-4 w-4" /> Shyam Paradise
                            </p>
                            <p className="font-poppins text-gray-600 mb-2 flex items-center gap-2">
                                <MapPin className="text-wedding-gold h-4 w-4" /> Ram Rajya Chowk, Bhinasar
                            </p>
                            <p className="font-poppins text-gray-600 mb-4 flex items-center gap-2">
                                <Clock className="text-wedding-gold h-4 w-4" />10 December 2025 to 12 December 2025
                            </p>
                            <p className="font-poppins text-gray-700 mb-6">
                                A luxurious setting for the reception celebration with dinner, dancing and entertainment.
                            </p>
                            <a
                                href="https://maps.app.goo.gl/m5FP4JHKPWBABrr86"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center font-poppins text-wedding-gold border border-wedding-gold hover:bg-wedding-gold hover:text-white transition duration-300 rounded-full py-2 px-6"
                            >
                                <ArrowRight className="mr-2 h-4 w-4" /> Get Directions
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 rounded-lg overflow-hidden shadow-lg"
                >
                    <div className="bg-gray-200 w-full h-96 relative">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.7095911559127!2d73.30972297448963!3d27.97217887603186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fe7b95c08625f%3A0xc12d327a1b746269!2sChhalani%20Palace%20New!5e0!3m2!1sen!2sin!4v1745089925970!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Wedding Venue Map">
                        </iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VenueSection;