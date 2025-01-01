import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

const Technologies = ({ technologies }) => {
  if (!technologies?.length) return null;

  return (
    <motion.div variants={fadeInUp} className="space-y-4">
      <h4 className="text-xl font-semibold text-[var(--accent-blue)]">
        Technologies Used
      </h4>
      <ul className="space-y-3">
        {technologies.map((tech, index) => (
          <li key={index} className="flex items-start text-gray-300">
            <span className="text-[var(--accent-blue)] mr-2 mt-1.5">•</span>
            <span>{tech}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Technologies;