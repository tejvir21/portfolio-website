import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--primary-dark)]"
    >
      <div className="text-center">
        <Logo />
        <div className="mt-8">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-16 h-16 mx-auto border-4 border-[var(--accent-blue)] rounded-full border-t-transparent animate-spin"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;