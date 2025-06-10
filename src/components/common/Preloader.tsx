import React from 'react';
import { motion } from 'framer-motion';
const Preloader: React.FC = () => {
  return <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.div className="relative w-24 h-24" initial={{
      opacity: 0,
      scale: 0.5
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.5
    }}>
        <motion.div className="absolute inset-0 border-4 border-blue-500 rounded-full" initial={{
        rotate: 0
      }} animate={{
        rotate: 360
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'linear'
      }} />
        <motion.div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full" initial={{
        rotate: 0
      }} animate={{
        rotate: -360
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear',
        delay: 0.2
      }} />
        <motion.div className="absolute inset-2 border-4 border-transparent border-r-teal-400 rounded-full" initial={{
        rotate: 0
      }} animate={{
        rotate: 360
      }} transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
        delay: 0.4
      }} />
      </motion.div>
    </div>;
};
export default Preloader;