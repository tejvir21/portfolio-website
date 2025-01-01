import React from 'react';

const NavLink = ({ href, label, isActive, onClick, className = '' }) => (
  <a
    href={href}
    onClick={onClick}
    className={`block px-3 py-2 text-gray-300 hover:text-[var(--accent-blue)] transition-colors ${
      isActive ? 'text-[var(--accent-blue)]' : ''
    } ${className}`}
  >
    {label}
  </a>
);

export default NavLink;