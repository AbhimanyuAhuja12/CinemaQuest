import { motion } from 'framer-motion';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleGetStarted = () => {
    if (user) {
      window.location.href = '/browse';
    } else {
      window.location.href = '/sign-in';
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Discover Your Next Favorite Movie
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Experience personalized movie recommendations powered by AI, tailored just for you.
          </p>
          <motion.button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Free
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="text-center">
              <h3 className="text-4xl font-bold">10K+</h3>
              <p className="text-gray-300">Active Users</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold">50K+</h3>
              <p className="text-gray-300">Movies</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold">15+</h3>
              <p className="text-gray-300">Languages</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}