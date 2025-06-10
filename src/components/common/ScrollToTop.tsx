import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpIcon } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
const ScrollToTop: React.FC = () => {
  const scrollY = useScrollPosition();
  const visible = scrollY > 300;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <AnimatePresence>
      {visible && <motion.button className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 p-3 text-white shadow-lg backdrop-blur-sm hover:shadow-purple-500/30 transition-all" onClick={scrollToTop} initial={{
      opacity: 0,
      scale: 0.5,
      y: 20
    }} animate={{
      opacity: 1,
      scale: 1,
      y: 0
    }} exit={{
      opacity: 0,
      scale: 0.5,
      y: 20
    }} whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }}>
          <ArrowUpIcon size={24} />
        </motion.button>}
    </AnimatePresence>;
};
export default ScrollToTop;