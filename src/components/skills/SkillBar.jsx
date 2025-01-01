import React from 'react';
import { motion } from 'framer-motion';
import * as Fa from 'react-icons/fa';
import * as Si from 'react-icons/si';
import * as Tb from 'react-icons/tb';

const SkillBar = ({ name, level, icon }) => {
  // Get icon from appropriate library based on prefix
  const getIcon = (iconName) => {
    if (iconName.startsWith('Fa')) return Fa[iconName];
    if (iconName.startsWith('Si')) return Si[iconName];
    if (iconName.startsWith('Tb')) return Tb[iconName];
    return null;
  };

  const Icon = getIcon(icon);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {Icon && <Icon className="mr-2 text-[var(--accent-blue)]" size={20} />}
          <span>{name}</span>
        </div>
        <span className="text-[var(--accent-blue)]">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)]"
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;