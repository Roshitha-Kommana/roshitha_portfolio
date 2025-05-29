import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHome, FaUser, FaGraduationCap, FaEnvelope
} from 'react-icons/fa';
import { GoProjectSymlink } from 'react-icons/go';
import { Link as ScrollLink } from 'react-scroll';

const navLinks = [
  { name: 'Home', icon: <FaHome />, to: 'hero' },
  { name: 'About', icon: <FaUser />, to: 'about' },
  { name: 'Education', icon: <FaGraduationCap />, to: 'education' },
  { name: 'Projects', icon: <GoProjectSymlink />, to: 'projects' },
  { name: 'Contact', icon: <FaEnvelope />, to: 'contact' },
];

const Navbar = () => {
  return (
    <motion.div
      className="fixed top-4 inset-x-0 z-50 flex justify-center"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-full px-6 py-3 flex items-center space-x-6 sm:space-x-8 text-white">
        {navLinks.map(({ name, icon, to }) => (
          <ScrollLink
            key={name}
            to={to}
            smooth
            duration={500}
            offset={-80}
            className="flex items-center gap-1 cursor-pointer transition duration-200 hover:text-black"
          >
            <span className="text-lg">{icon}</span>
            <span className="hidden sm:inline">{name}</span>
          </ScrollLink>
        ))}
      </nav>
    </motion.div>
  );
};

export default Navbar;
