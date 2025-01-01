import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Card from '../common/Card';

const ProjectCard = ({ project, onClick }) => {
  const { title, description, image, tags, github, live } = project;

  const handleClick = () => {
    if (onClick) {
      onClick(project);
    }
  };

  const handleLinkClick = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

  return (
    <div 
      onClick={handleClick}
      className="cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <Card>
        <div className="relative group">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
            <button
              onClick={(e) => handleLinkClick(e, github)}
              className="text-white hover:text-[var(--accent-blue)]"
              aria-label="View GitHub repository"
            >
              <FaGithub size={24} />
            </button>
            <button
              onClick={(e) => handleLinkClick(e, live)}
              className="text-white hover:text-[var(--accent-blue)]"
              aria-label="View live demo"
            >
              <FaExternalLinkAlt size={24} />
            </button>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] rounded-full"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-3 py-1 text-sm bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] rounded-full">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;