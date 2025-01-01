import React from 'react';
import { TESTIMONIALS } from '../../utils/constants/testimonials';
import TestimonialCard from './TestimonialCard';
import Section from '../common/Section';

const Testimonials = () => {
  return (
    <Section id="testimonials" title="Testimonials">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;