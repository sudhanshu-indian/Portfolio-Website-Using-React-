import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/common/ScrollToTop';
import Preloader from './components/common/Preloader';
import AnimatedBackground from './components/common/AnimatedBackground';
// Initialize AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
export function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time for preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Preloader />;
  }
  return <ThemeProvider>
      <div className="relative overflow-hidden">
        <AnimatedBackground />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <ScrollToTop />
      </div>
    </ThemeProvider>;
}