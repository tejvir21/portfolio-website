import React from 'react';
import Modal from '../../common/Modal';
import CertificationDetail from './CertificationDetail';

const CertificateModal = ({ certificate, isOpen, onClose }) => {
  if (!certificate) return null;

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={certificate.title}
    >
      <CertificationDetail certificate={certificate} />
    </Modal>
  );
};

export default CertificateModal;