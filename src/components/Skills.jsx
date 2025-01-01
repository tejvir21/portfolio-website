import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../utils/constants';
import Section from './common/Section';
import SkillBar from './skills/SkillBar';

const Skills = () => {
  return (
    <Section id="skills" title="Skills & Expertise">
      <div className="grid md:grid-cols-2 gap-12">
        {Object.entries(SKILLS_DATA).map(([category, skills], groupIndex) => (
          <div key={groupIndex}>
            <h3 className="text-2xl font-bold mb-6 capitalize">{category}</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;