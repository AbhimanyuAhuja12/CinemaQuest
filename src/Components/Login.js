import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const phoneNo = useRef(null);

  const handleTestMode = () => {
    const testUser = {
      uid: 'test-user-id',
      email: 'test@cinemaquest.com',
      displayName: 'Test User',
      photoURL: USER_AVATAR,
    };
    dispatch(addUser(testUser));
    navigate('/browse');
  };

  const handleButtonClick = () => {
    const emailValue = email.current?.value || '';
    const passwordValue = password.current?.value || '';
    const nameValue = name.current?.value || '';
    const phoneNoValue = phoneNo.current?.value || '';

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: nameValue,
            photoURL: USER_AVATAR,
          }).then(() => {
            const { uid, displayName, email, photoURL } = user;
            dispatch(addUser({ uid, email, displayName, photoURL }));
            navigate('/browse');
          });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then(async (userCredential) => {
          const user = userCredential.user;
          await user.reload();
          const { uid, displayName, email, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
          navigate('/browse');
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background YouTube Video */}
      <div className="absolute w-full h-full">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID"
          title="Background Video"
          allow="autoplay; fullscreen"
          frameBorder="0"
        ></iframe>
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 mix-blend-overlay"></div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [null, '-100vh'],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md px-4"
      >
        <motion.div
          className="bg-black/40 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10"
          whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)' }}
        >
          <motion.h1
            className="text-4xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {isSignInForm ? 'Welcome to CinemaQuest' : 'Join the Adventure'}
          </motion.h1>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {!isSignInForm && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <input
                  ref={name}
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </motion.div>
            )}

            <input
              ref={email}
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
            />

            {!isSignInForm && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <input
                  ref={phoneNo}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </motion.div>
            )}

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
            />

            {errorMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm"
              >
                {errorMessage}
              </motion.p>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg"
              onClick={handleButtonClick}
            >
              {isSignInForm ? 'Sign In' : 'Create Account'}
            </motion.button>

            <div className="text-center text-white">
              <p className="text-sm">
                {isSignInForm ? "Don't have an account?" : 'Already have an account?'}
                <button
                  onClick={() => setIsSignInForm(!isSignInForm)}
                  className="ml-2 text-accent hover:underline font-semibold"
                >
                  {isSignInForm ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-white/60">Or</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleTestMode}
              className="w-full py-3 rounded-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors"
            >
              Try Demo Mode
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
