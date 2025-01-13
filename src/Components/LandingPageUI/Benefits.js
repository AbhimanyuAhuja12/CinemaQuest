import { motion } from 'framer-motion';

export default function Benefits() {
  const benefits = [
    {
      title: "Personalized Experience",
      description: "Get movie recommendations that match your unique taste and preferences.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=2840&q=80"
    },
    {
      title: "Save Time",
      description: "Quickly find movies you'll love without endless scrolling.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
    },
    {
      title: "Stay Updated",
      description: "Never miss new releases and trending movies in your favorite genres.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
    }
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CinemaQuest?
          </h2>
          <p className="text-xl text-gray-600">
            Experience the future of movie discovery
          </p>
        </motion.div>

        <div className="space-y-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-16`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex-1">
                <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 text-lg">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}