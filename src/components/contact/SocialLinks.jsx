import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../utils/constants';

const SocialLinks = () => {
  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
  };

  return (
    <div className="flex space-x-4">
      {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
        const Icon = socialIcons[platform];
        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center border border-[var(--accent-blue)] text-[var(--accent-blue)] hover:bg-[var(--accent-blue)] hover:text-white transition-all duration-300"
          >
            <Icon size={24} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;