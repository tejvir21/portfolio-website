import React from 'react';
import { motion } from 'framer-motion';
import NavLink from './NavLink';

const MobileMenu = ({ isOpen, activeSection, navItems, onLinkClick }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800"
    >
      <div className="px-4 py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            {...item}
            isActive={activeSection === item.href.slice(1)}
            onClick={() => onLinkClick()}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default MobileMenu;