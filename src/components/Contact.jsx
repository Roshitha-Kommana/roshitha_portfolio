import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_ln1b367',
        'template_wgcza8i',
        formRef.current,
        'T-hfPbdDWJ4vL7fyq'
      )
      .then(() => {
        setShowPopup(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => console.error('FAILED...', err));
  };

  return (
    <section id="contact" className="px-6 py-20 bg-transparent text-gray-900">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold text-center text-black mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-2xl mx-auto">
        <motion.div
          className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-md border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Get in Touch with Me</h3>
          <p className="text-gray-700 mb-6">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition flex items-center gap-2"
            >
              <FaPaperPlane className="text-black" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="backdrop-blur-md bg-white/10 text-white p-6 rounded-xl border border-white/20">
            <h4 className="text-xl mb-4">Message Sent Successfully!</h4>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;

