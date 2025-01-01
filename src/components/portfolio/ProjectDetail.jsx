import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import AnimatedButton from '../common/AnimatedButton';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

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
          {features && features.length > 0 && (
            <motion.div variants={fadeInUp} className="space-y-4">
              <h4 className="text-xl font-semibold text-[var(--accent-blue)]">
                Key Features
              </h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-[var(--accent-blue)] mr-2 mt-1.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {technologies && technologies.length > 0 && (
            <motion.div variants={fadeInUp} className="space-y-4">
              <h4 className="text-xl font-semibold text-[var(--accent-blue)]">
                Technologies Used
              </h4>
              <ul className="space-y-3">
                {technologies.map((tech, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-[var(--accent-blue)] mr-2 mt-1.5">•</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
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

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
          <AnimatedButton
            onClick={() => window.open(github, '_blank')}
            className="flex items-center gap-2"
          >
            <FaGithub size={20} />
            View Code
          </AnimatedButton>
          <AnimatedButton
            variant="secondary"
            onClick={() => window.open(live, '_blank')}
            className="flex items-center gap-2"
          >
            <FaExternalLinkAlt size={16} />
            Live Demo
          </AnimatedButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;