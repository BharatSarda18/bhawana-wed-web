const EventsSection = () => {
  const events = [
    {
      day: "Thursday",
      date: "11th December 2025",
      description: "सात जन्मों का साथ, सात वचनों के साथ",
      title: "बारात स्वागत एवं शुभ विवाह",
      time: "7:00 PM onwards"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-wedding-maroon text-4xl font-bold mb-4">Wedding Schedule</h2>
        </div>

        <div className="grid grid-cols-1 mx-auto max-w-3xl">
          {events.map((event, index) => (
            <div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-wedding-ivory to-white rounded-xl shadow-lg overflow-hidden border border-wedding-gold border-opacity-20 transform transition-all duration-300 ease-out hover:-translate-y-1 hover:border-opacity-40"
            >
              <div className="h-2 bg-gradient-to-r from-wedding-gold to-wedding-maroon"></div>
              
              <div className="p-6 text-center">
                <p className="font-poppins text-wedding-maroon text-sm font-medium mb-1">
                  {event.day}
                </p>
                
                <p className="font-poppins text-gray-800 text-lg font-semibold mb-3">
                  {event.date}
                </p>
                
                <p className="font-poppins text-gray-700 text-sm mb-4 italic">
                  {event.description}
                </p>
                
                <h3 className="font-playfair text-wedding-maroon text-2xl font-bold mb-3">
                  {event.title}
                </h3>
                
                <div className="font-poppins text-wedding-gold text-base font-medium flex items-center justify-center gap-2">
                  <div className="flex items-center">
                    <span className="leading-none">{event.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;