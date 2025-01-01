import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center space-x-2 cursor-pointer"
      onClick={scrollToTop}
    >
      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] flex items-center justify-center relative overflow-hidden hover:opacity-90 transition-opacity">
        <div className="absolute inset-0 bg-black/10"></div>
        <span className="text-2xl font-bold text-white relative z-10">TC</span>
      </div>
      <span className="text-xl font-bold gradient-text hidden sm:block hover:opacity-90 transition-opacity">Tejvir</span>
    </motion.div>
  );
};

export default Logo;