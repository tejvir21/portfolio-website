import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";

const CertificateCard = ({ certificate, setSelectedProject }) => {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-black/30 p-6 rounded-lg card-hover text-center h-full"
      onClick={() => setSelectedProject(certificate)}
    >
      <div className="text-[var(--accent-blue)] mb-4">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-96 h-56 mx-auto"
        />
        {/* <certificate.icon size={40} className="mx-auto" /> */}
      </div>
      <h4 className="text-xl font-semibold mb-2">{certificate.title}</h4>
    </motion.div>
  );
};

export default CertificateCard;
