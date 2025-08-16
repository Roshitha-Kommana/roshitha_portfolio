import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-6 text-black text-center relative">
      {/* Stylish Divider */}
      <div className="flex items-center justify-center mb-4">
        <span className="flex-grow border-t border-black"></span>
        <span
          className="mx-4 text-2xl tracking-wide"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Roshitha Kommana
        </span>
        <span className="flex-grow border-t border-black"></span>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="https://github.com/Roshitha-Kommana"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition text-black"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/roshitha-kommana"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition text-black"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition text-black"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:roshithakommana18@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition text-black"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/916302680957"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition text-black"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-4 text-sm text-black">
        © {new Date().getFullYear()} Designed & Developed by Roshitha Kommana.
      </p>
    </footer>
  );
};

export default Footer;
