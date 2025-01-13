import { motion } from 'framer-motion';
import { FaRobot, FaLanguage, FaSearch, FaBolt, FaPalette, FaUserShield } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaRobot className="text-4xl text-accent" />,
      title: "AI-Powered Recommendations",
      description: "Get personalized movie suggestions powered by OpenAI's advanced algorithms."
    },
    {
      icon: <FaLanguage className="text-4xl text-accent" />,
      title: "Multi-Language Support",
      description: "Enjoy CinemaQuest in your preferred language with our comprehensive language options."
    },
    {
      icon: <FaSearch className="text-4xl text-accent" />,
      title: "Smart Search",
      description: "Find exactly what you're looking for with our intelligent search system."
    },
    {
      icon: <FaBolt className="text-4xl text-accent" />,
      title: "Real-Time Updates",
      description: "Stay current with instant updates on new releases and trending movies."
    },
    {
      icon: <FaPalette className="text-4xl text-accent" />,
      title: "Beautiful Interface",
      description: "Experience a stunning and intuitive user interface designed for movie lovers."
    },
    {
      icon: <FaUserShield className="text-4xl text-accent" />,
      title: "Secure Authentication",
      description: "Your data is protected with our robust security measures."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful Features
          </motion.h2>
          <p className="text-xl text-gray-600">
            Everything you need for the perfect movie experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}