import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, DownloadIcon } from 'lucide-react';
const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState('Creative Developer');
  // Simple typing effect without react-typed
  useEffect(() => {
    const texts = ['Creative Developer', 'UI Designer', 'Web Alchemist', 'Problem Solver'];
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setText(texts[currentIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      const elements = parallaxRef.current.querySelectorAll('.parallax-element');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      elements.forEach(el => {
        const depth = parseFloat((el as HTMLElement).dataset.depth || '0.1');
        const moveX = (x - 0.5) * depth * 100;
        const moveY = (y - 0.5) * depth * 100;
        (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <section id="home" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Decorative Elements */}
      <div ref={parallaxRef} className="absolute inset-0 overflow-hidden">
        <div className="parallax-element absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-300/20 to-blue-300/20 blur-3xl dark:from-purple-900/30 dark:to-blue-900/30" data-depth="0.2"></div>
        <div className="parallax-element absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-pink-300/20 to-purple-300/20 blur-3xl dark:from-pink-900/30 dark:to-purple-900/30" data-depth="0.1"></div>
        <div className="parallax-element absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-blue-300/20 to-teal-300/20 blur-3xl dark:from-blue-900/30 dark:to-teal-900/30" data-depth="0.3"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="flex flex-col space-y-6">
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="text-xl font-medium text-purple-600 dark:text-purple-400">
              Hello, I'm
            </motion.h2>
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.5
          }} className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white">
              Sudhanshu Kumar
            </motion.h1>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.7
          }} className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300">
              <motion.span key={text} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -20
            }} className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                {text}
              </motion.span>
            </motion.div>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.9
          }} className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
              I craft engaging digital experiences with modern technologies,
              focusing on performance, aesthetics, and user experience.
            </motion.p>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 1.1
          }} className="flex flex-wrap gap-4 pt-4">
              <motion.a href="#contact" className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                Let's Talk
              </motion.a>
              <motion.a href="/resume.pdf" download className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center gap-2" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <DownloadIcon size={18} />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>
          {/* Right Column: Big Round Photo with Attractive Background */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="flex justify-center items-center">
            <div className="relative w-[420px] h-[420px] md:w-[540px] md:h-[540px] flex items-center justify-center">
              {/* Outer blurred gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/40 via-blue-400/30 to-pink-400/40 blur-3xl scale-110 z-0"></div>
              {/* Decorative border ring */}
              <div className="absolute inset-8 rounded-full border-[16px] border-gradient-to-r from-purple-500 via-blue-400 to-pink-400 opacity-90 z-10"></div>
              {/* Photo with inner shadow and round mask */}
              <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center z-20 bg-white/80 dark:bg-gray-900/80 shadow-2xl">
                <img src="sudhanshu.png" alt="Sudhanshu Kumar" className="w-[80%] h-[80%] object-cover rounded-full shadow-2xl border-8 border-white dark:border-gray-900" />
              </div>
            </div>
          </motion.div>
        </div>
        {/* Scroll Down Indicator */}
        <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}>
          <a href="#skills" className="flex flex-col items-center text-gray-500 dark:text-gray-400">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDownIcon size={20} />
          </a>
        </motion.div>
      </div>
    </section>;
};
export default Hero;