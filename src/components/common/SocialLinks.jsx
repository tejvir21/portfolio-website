import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../utils/constants';
import SocialLink from './SocialLink';

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
};

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {Object.entries(SOCIAL_LINKS)
        .filter(([platform]) => socialIcons[platform]) // Only show links with defined icons
        .map(([platform, url]) => (
          <SocialLink
            key={platform}
            href={url}
            icon={socialIcons[platform]}
            label={`Visit ${platform}`}
          />
        ))}
    </div>
  );
};

export default SocialLinks;