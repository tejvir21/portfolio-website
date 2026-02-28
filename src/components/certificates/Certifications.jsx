import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/animations';
import CertificateCard from './CertificateCard';
import CertificatesCarousel from './CertificatesCarousel';
import CertificateModal from './certificationDetails/CertificateModal';
import Section from '../common/Section';
import { CERTIFICATES_DATA } from '../../utils/constants/certificates.js';

const Certificates = () => {
    const [selectedProject, setSelectedProject] = useState(null);
  
  return (
    <Section id="certificates" title="Certificates">
      {/* Desktop View - Carousel */}
      <div className="hidden md:block">
        <CertificatesCarousel certificates={CERTIFICATES_DATA} setSelectedProject={setSelectedProject} />
      </div>

      {/* Mobile View - Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:hidden gap-6"
      >
        {CERTIFICATES_DATA.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} setSelectedProject={setSelectedProject} />
        ))}
      </motion.div>

      <CertificateModal
        certificate={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
};

export default Certificates;