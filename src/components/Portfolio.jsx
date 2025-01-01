import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../utils/constants';
import ProjectCard from './portfolio/ProjectCard';
import ProjectModal from './portfolio/ProjectModal';
import Section from './common/Section';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section id="portfolio" title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
};

export default Portfolio;