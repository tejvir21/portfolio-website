import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { validateForm } from '../../utils/validation';
import { EMAIL_JS_CONFIG } from '../../utils/constants/email';
import Button from '../common/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const successTimeoutRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      await emailjs.send(
        EMAIL_JS_CONFIG.serviceId,
        EMAIL_JS_CONFIG.templateId,
        formData,
        EMAIL_JS_CONFIG.publicKey
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      // Clear error message after 5 seconds
      successTimeoutRef.current = setTimeout(() => {
        if (status === 'error') {
          setStatus('');
        }
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Clear status when user starts typing
    if (status) {
      setStatus('');
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Clear timeout on unmount
  React.useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md bg-black/30 border ${
            errors.name ? 'border-red-500' : 'border-gray-600'
          } text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md bg-black/30 border ${
            errors.email ? 'border-red-500' : 'border-gray-600'
          } text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`mt-1 block w-full rounded-md bg-black/30 border ${
            errors.message ? 'border-red-500' : 'border-gray-600'
          } text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        loading={loading}
        disabled={loading}
        className="w-full"
      >
        Send Message
      </Button>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-500"
        >
          Message sent successfully!
        </motion.p>
      )}
      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500"
        >
          Error sending message. Please try again.
        </motion.p>
      )}
    </form>
  );
};

export default ContactForm;