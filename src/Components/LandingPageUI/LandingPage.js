import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Benefits from './Benefits';
import Testimonials from './Testimonials';
import Footer from './Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;