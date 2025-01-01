import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

const Features = ({ features }) => {
  if (!features?.length) return null;

  return (
    <motion.div variants={fadeInUp} className="space-y-4">
      <h4 className="text-xl font-semibold text-[var(--accent-blue)]">
        Key Features
      </h4>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-300">
            <span className="text-[var(--accent-blue)] mr-2 mt-1.5">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Features;