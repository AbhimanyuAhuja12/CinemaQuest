import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Planet({ size, color, duration, delay, distance }) {
  return (
    <motion.div
      className={`absolute rounded-full ${size} ${color}`}
      animate={{
        rotate: 360
      }}
      style={{
        x: -size/2,
        y: -size/2,
        transformOrigin: `${distance}px 50%`
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay
      }}
    />
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white pt-16 pb-8 overflow-hidden">
      {/* Solar System Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/2 top-1/2">
          {/* Sun */}
          <motion.div
            className="w-16 h-16 bg-yellow-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Planets */}
          <Planet size="w-4 h-4" color="bg-blue-400" duration={8} delay={0} distance={50} />
          <Planet size="w-6 h-6" color="bg-red-400" duration={12} delay={1} distance={80} />
          <Planet size="w-5 h-5" color="bg-green-400" duration={15} delay={2} distance={110} />
          <Planet size="w-7 h-7" color="bg-purple-400" duration={20} delay={3} distance={150} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">About CinemaQuest</h3>
            <p className="text-gray-400">
              Your ultimate destination for discovering movies tailored to your taste. 
              Powered by AI, designed for movie lovers.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'FAQ', 'Contact Us'].map((link, index) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { Icon: FaFacebook, color: "hover:text-blue-500" },
                { Icon: FaTwitter, color: "hover:text-blue-400" },
                { Icon: FaInstagram, color: "hover:text-pink-500" },
                { Icon: FaYoutube, color: "hover:text-red-500" }
              ].map(({ Icon, color }, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`text-gray-400 ${color} transition-colors`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <form className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-accent text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <motion.div
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p>&copy; {new Date().getFullYear()} CinemaQuest. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}