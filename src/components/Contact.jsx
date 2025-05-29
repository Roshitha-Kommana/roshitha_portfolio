import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram , FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
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

  const handlePopupClose = () => setShowPopup(false);

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

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Get in Touch Form Card */}
        <motion.div
          className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-md border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-black-700 mb-4">Get in Touch with Me</h3>
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

        {/* Right: Vertical Stack of Contact Cards */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContactCard
            icon={<FaGithub className="text-xl text-[#333]" />}
            title="GitHub"
            link="https://github.com/Roshitha-Kommana"
            value="github.com/Roshitha-Kommana"
          />
          <ContactCard
            icon={<FaLinkedin className="text-xl text-[#0077B5]" />}
            title="LinkedIn"
            link="https://linkedin.com/in/roshitha-kommana"
            value="linkedin.com/in/roshitha-kommana"
          />
          <ContactCard
            icon={<FaEnvelope className="text-xl text-red-500" />}
            title="Email"
            link="mailto:roshithakommana18@gmail.com"
            value="roshithakommana18@gmail.com"
          />
          <ContactCard
            icon={<FaWhatsapp className="text-xl text-green-600" />}
            title="WhatsApp"
            link="tel:+916302680957"
            value="+91 63026 80957"
          />
          <ContactCard
            icon={<FaInstagram className="text-xl text-[#E1306C]" />}
            title="Instagram"
            link="https://www.instagram.com/roshitha_18?igsh=azBwa3pnbG85enEz"
            value="@roshitha_18"
          />
          </motion.div>

      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="backdrop-blur-md bg-white/10 text-white p-6 rounded-xl border border-white/20">
            <h4 className="text-xl mb-4">Message Sent Successfully!</h4>
            <button
              onClick={handlePopupClose}
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

// Contact Card Component
const ContactCard = ({ icon, title, link, value }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.02, y: -2, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white/20 backdrop-blur-md p-6 rounded-lg border border-gray-300 shadow-sm flex items-center gap-3 transition"
    >
      <div className="text-purple-700 text-lg">{icon}</div>
      <div className="leading-tight">
        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
        <p className="text-xs text-gray-700">{value}</p>
      </div>
    </motion.a>
  );
};

export default Contact;
