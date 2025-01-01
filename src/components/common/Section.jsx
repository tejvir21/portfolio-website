import React from 'react';
import { motion } from 'framer-motion';

const Section = ({
  id,
  title,
  children,
  className = '',
}) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12 gradient-text"
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;