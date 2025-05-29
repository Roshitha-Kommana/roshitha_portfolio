import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    id: 3,
    institute: 'Maharaj Vijayaram Gajapathi Raj College of Engineering',
    course: 'B.Tech in CSE',
    year: '2022 - 2026',
    score: 'CGPA: 8.53',
  },
  {
    id: 2,
    institute: 'Sri Chaitanya Junior College',
    course: 'Intermediate - MPC',
    year: '2020 - 2022',
    score: '74.8%',
  },
  {
    id: 1,
    institute: 'Sri Chaitanya Techno School',
    course: 'SSC',
    year: '2019 - 2020',
    score: '99.8%',
  },
];

const Education = () => {
  return (
    <section id="education" className="text-white px-6 py-16">
      <motion.h2
        className="text-3xl font-bold mb-10 text-black text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Education
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto bg-white/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="py-2 border-l-4 border-black pl-4 mb-4 hover:bg-white/10 rounded transition duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-[#4B0082] mb-1">{edu.course}</h3>
            <p className="text-white text-sm mb-1">{edu.institute}</p>
            <div className="flex justify-between text-sm">
              <span className="text-white">{edu.year}</span>
              <span className="text-black">{edu.score}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
