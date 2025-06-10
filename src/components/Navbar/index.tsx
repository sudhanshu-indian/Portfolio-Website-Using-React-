import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from 'lucide-react';
const navLinks = [{
  name: 'Home',
  href: '#home'
}, {
  name: 'Skills',
  href: '#skills'
}, {
  name: 'Projects',
  href: '#projects'
}, {
  name: 'Contact',
  href: '#contact'
}];
const Navbar: React.FC = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const scrollY = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  // Handle scroll to update active section
  useEffect(() => {
    const sections = navLinks.map(link => link.href.substring(1));
    const checkActiveSection = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
      // If we're at the top of the page, set "home" as active
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', checkActiveSection);
    return () => window.removeEventListener('scroll', checkActiveSection);
  }, []);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navbarVariants = {
    hidden: {
      y: -100
    },
    visible: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };
  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%'
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };
  return <motion.nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/10 dark:bg-black/20 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`} initial="hidden" animate="visible" variants={navbarVariants}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a href="#home" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text" whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }}>
          Portfolio
        </motion.a>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <motion.a key={link.name} href={link.href} className={`relative text-lg ${activeSection === link.href.substring(1) ? 'text-purple-500 dark:text-purple-400' : 'text-gray-700 dark:text-gray-300'} hover:text-purple-500 dark:hover:text-purple-400 transition-colors`} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
              {link.name}
              {activeSection === link.href.substring(1) && <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500" layoutId="activeSection" transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }} />}
            </motion.a>)}
          {/* Theme Toggle Button */}
          <motion.button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" whileHover={{
          scale: 1.1,
          rotate: 15
        }} whileTap={{
          scale: 0.9
        }}>
            {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </motion.button>
        </div>
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <motion.button onClick={toggleTheme} className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }}>
            {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </motion.button>
          <motion.button onClick={toggleMenu} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }}>
            {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </motion.button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      <motion.div className="md:hidden fixed top-0 right-0 h-full w-2/3 bg-white dark:bg-gray-900 shadow-xl z-50 pt-20 px-6" initial="closed" animate={isOpen ? 'open' : 'closed'} variants={menuVariants}>
        <div className="flex flex-col space-y-6">
          {navLinks.map(link => <motion.a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`text-xl ${activeSection === link.href.substring(1) ? 'text-purple-500' : 'text-gray-700 dark:text-gray-300'}`} whileHover={{
          x: 10
        }}>
              {link.name}
            </motion.a>)}
        </div>
      </motion.div>
      {/* Overlay for mobile menu */}
      {isOpen && <motion.div className="fixed inset-0 bg-black/50 z-40 md:hidden" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} onClick={() => setIsOpen(false)} />}
    </motion.nav>;
};
export default Navbar;