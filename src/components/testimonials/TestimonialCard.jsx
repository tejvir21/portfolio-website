import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-black/30 p-6 rounded-lg card-hover"
  >
    <div className="flex items-center mb-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h3 className="font-bold">{testimonial.name}</h3>
        <p className="text-sm text-gray-400">
          {testimonial.role} at {testimonial.company}
        </p>
      </div>
    </div>
    <p className="text-gray-300 italic">"{testimonial.content}"</p>
  </motion.div>
);

export default TestimonialCard;