import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './common/SocialLinks';
import profileImage from '../assets/profile.jpg'; // We'll import the local image

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Tejvir Chauhan</span>
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-gray-300 mb-8">
              I am a versatile Full Stack Developer with expertise in crafting seamless web applications, blending front-end creativity with back-end efficiency.
            </p>
            <SocialLinks />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-[var(--accent-blue)] shadow-lg shadow-[var(--accent-blue)]/20">
              <img
                src={profileImage}
                alt="Tejvir Chauhan - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;