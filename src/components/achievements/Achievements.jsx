import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/animations';
import AchievementCard from './AchievementCard';
import AchievementsCarousel from './AchievementsCarousel';
import Section from '../common/Section';
import { ACHIEVEMENTS_DATA } from '../../utils/constants/achievements';

const Achievements = () => {
  return (
    <Section id="achievements" title="Achievements">
      {/* Desktop View - Carousel */}
      <div className="hidden md:block">
        <AchievementsCarousel achievements={ACHIEVEMENTS_DATA} />
      </div>

      {/* Mobile View - Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:hidden gap-6"
      >
        {ACHIEVEMENTS_DATA.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </motion.div>
    </Section>
  );
};

export default Achievements;