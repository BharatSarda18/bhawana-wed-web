const VenueSection = () => {
    return (
        <section id="venue" className="py-20 bg-wedding-ivory" style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>
            <div className="container mx-auto px-4">
                <div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-playfair text-wedding-maroon text-4xl font-bold mb-4">Wedding Venue</h2>

                </div>

                <div className="w-full" style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                    <div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
                        style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}
                    >
                        <div className="w-full h-80 bg-gray-300 cursor-pointer" onClick={() => window.open("https://maps.app.goo.gl/Xg2pjywPTSdcUymz8", "_blank")}>
                            <img className="h-80 w-full"  src="/images/chhalaniPalace.jpeg" alt="Chhalani Palace"/>
                        </div>
                        <div className="p-6">
                            <p className="font-poppins text-gray-600 font-bold  flex items-start gap-2">
                                Chhalani Palace, Bhinasar, Bikaner
                            </p>
                           
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VenueSection;