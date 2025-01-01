import React from 'react';
import NavLink from './NavLink';

const DesktopMenu = ({ activeSection, navItems }) => (
  <div className="hidden md:flex md:items-center md:space-x-1">
    {navItems.map((item) => (
      <NavLink
        key={item.label}
        {...item}
        isActive={activeSection === item.href.slice(1)}
        className="inline-block"
      />
    ))}
  </div>
);

export default DesktopMenu;