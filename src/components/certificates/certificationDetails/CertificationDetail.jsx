import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import AnimatedButton from '../../common/AnimatedButton';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const CertificationDetail = ({ certificate }) => {

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      <motion.div variants={fadeInUp} className="aspect-video">
        <img 
          src={certificate.image} 
          alt={certificate.title} 
          className="w-full h-full object-contain rounded-lg shadow-lg"
        />
      </motion.div>
      
      <motion.div variants={fadeInUp} className="space-y-6">
        
        <div className="grid md:grid-cols-2 gap-8">
          {certificate.description && (
            <motion.div variants={fadeInUp} className="space-y-4">
              <h4 className="text-xl font-semibold text-[var(--accent-blue)]">
                Description
              </h4>
              <ul className="space-y-3">
                {certificate.description.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-[var(--accent-blue)] mr-2 mt-1.5"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {certificate.date && (
            <motion.div variants={fadeInUp} className="space-y-4">
              <h4 className="text-xl font-semibold text-[var(--accent-blue)]">
                Date: <span className='text-gray-300 text-md'>{certificate.date}</span>
              </h4>
            </motion.div>
          )}
        </div>

        {/* <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
          <AnimatedButton
            onClick={() => window.open(certificate.github, '_blank')}
            className="flex items-center gap-2"
          >
            <FaGithub size={20} />
            View Code
          </AnimatedButton>
          <AnimatedButton
            variant="secondary"
            onClick={() => window.open(certificate.live, '_blank')}
            className="flex items-center gap-2"
          >
            <FaExternalLinkAlt size={16} />
            Live Demo
          </AnimatedButton>
        </motion.div> */}   
      </motion.div>
    </motion.div>
  );
};

export default CertificationDetail;