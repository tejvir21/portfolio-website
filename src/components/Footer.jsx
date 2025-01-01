import React from 'react';
import { FaHeart } from 'react-icons/fa';
import SocialLinks from '../components/common/SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/30 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <SocialLinks />
          
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <FaHeart className="text-red-500 mx-1" />
            <span>by Tejvir Chauhan</span>
          </div>
          
          <div className="text-gray-500 text-sm">
            © {currentYear} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;