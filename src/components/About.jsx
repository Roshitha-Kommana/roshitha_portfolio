// About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './About.css';

const About = () => {
  return (
    <section id="about" className="text-white px-6 py-200 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-10 text-black text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-10 justify-between items-start">
        <div className="cards-container flex flex-col gap-6 ml-0 md:ml-24 lg:ml-32">
          <motion.div
            className="about__card bg-white/10 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-[#4B0082]">Final Year Student</h3>
            <p className="text-white-300">
              Currently pursuing B.Tech in Computer Science, final year.
            </p>
          </motion.div>

          <motion.div
            className="about__card bg-white/10 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-[#4B0082]">Projects Completed</h3>
            <p className="text-primary text-3xl font-bold mb-4 text-white">5+</p>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer text-primary text-white underline hover:no-underline"
            >
              View Projects
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="text-gray-300 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="about__paragraph text-white-700 text-lg leading-relaxed">
            Passionate Computer Science Engineering student focused on building scalable and user-friendly web applications. With a strong foundation in full-stack development, skilled at creating clean, maintainable code using modern technologies like the MERN stack and programming languages including C, C++, Python, and Java.
            Believing in the power of technology to solve real-world problems and improve lives, continuously motivated to learn, adapt, and deliver software solutions that are both functional and intuitive.<br />
            Collaboration, problem-solving, and growth are central to the work ethic. Actively seeking a job to build a career in the software industry, with a goal to contribute skills, learn from professionals, and work on meaningful projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
