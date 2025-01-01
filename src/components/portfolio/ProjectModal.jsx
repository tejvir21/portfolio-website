import React from 'react';
import Modal from '../common/Modal';
import ProjectDetail from './ProjectDetail';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={project.title}
    >
      <ProjectDetail project={project} />
    </Modal>
  );
};

export default ProjectModal;