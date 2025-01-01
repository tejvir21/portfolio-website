import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

const AchievementCard = ({ icon: Icon, count, title, description }) => {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-black/30 p-6 rounded-lg card-hover text-center h-full"
    >
      <div className="text-[var(--accent-blue)] mb-4">
        <Icon size={40} className="mx-auto" />
      </div>
      <h3 className="text-3xl font-bold mb-2 gradient-text">{count}</h3>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default AchievementCard;