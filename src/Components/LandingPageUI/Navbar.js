import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSignUp = () => {
    window.location.href = '/sign-in'; 
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <motion.h1 
              className="text-2xl font-bold text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              CinemaQuest
            </motion.h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#benefits">Benefits</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <motion.button 
                onClick={handleSignUp}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#benefits">Benefits</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <motion.button 
              onClick={handleSignUp}
              className="w-full text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </a>
  );
}