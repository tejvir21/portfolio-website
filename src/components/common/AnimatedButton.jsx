import React from 'react';
import { motion } from 'framer-motion';

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

const AnimatedButton = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '' 
}) => {
  const baseStyles = 'font-bold py-3 px-6 rounded-lg transition-colors duration-300';
  const variants = {
    primary: 'bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-white hover:opacity-90',
    secondary: 'bg-transparent border-2 border-[var(--accent-blue)] text-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/10'
  };

  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;