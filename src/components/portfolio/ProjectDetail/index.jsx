import React from 'react';
import { motion } from 'framer-motion';
import Features from './Features';
import Technologies from './Technologies';
import ProjectActions from './ProjectActions';
import { fadeInUp } from './animations';

const ProjectDetail = ({ project }) => {
  const { title, description, image, tags, github, live, features, technologies } = project;

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      <motion.div variants={fadeInUp} className="aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </motion.div>
      
      <motion.div variants={fadeInUp} className="space-y-6">
        <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Features features={features} />
          <Technologies technologies={technologies} />
        </div>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 pt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <ProjectActions github={github} live={live} />
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;