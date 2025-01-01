import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import AnimatedButton from '../../common/AnimatedButton';
import { fadeInUp } from './animations';

const ProjectActions = ({ github, live }) => (
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
);

export default ProjectActions;