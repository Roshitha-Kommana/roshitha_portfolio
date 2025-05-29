import React from 'react';
import { motion } from 'framer-motion';
import { DiCode } from 'react-icons/di';
import { FaDatabase } from 'react-icons/fa';
import { FiTool } from 'react-icons/fi';
import { MdLightbulb } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';

const skillsData = [
  {
    category: 'Languages',
    icon: <DiCode size={28} />,
    skills: ['Java', 'Python', 'C++', 'C', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React.js'],
  },
  {
    category: 'Backend & Databases',
    icon: <FaDatabase size={28} />,
    skills: ['Firebase', 'MongoDB', 'MySQL'],
  },
  {
    category: 'Tools & Libraries',
    icon: <FiTool size={28} />,
    skills: ['OpenCV', 'Tesseract OCR', 'Git', 'VS Code'],
  },
  {
    category: 'Concepts',
    icon: <MdLightbulb size={28} />,
    skills: ['OOP', 'DBMS', 'Data Structures', 'Machine Learning', 'Big Data', 'UI/UX Principles'],
  },
  {
    category: 'Key Strengths',
    icon: <GiSkills size={28} />,
    skills: ['Problem Solving', 'Team Collaboration', 'Active Listener', 'Time Management'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="text-gray-900 px-6 py-16">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, idx) => {
          const initialAnimation =
            idx % 3 === 0
              ? { opacity: 0, x: -50 }
              : idx % 3 === 2
              ? { opacity: 0, x: 50 }
              : { opacity: 0, y: 50 };

          return (
            <motion.div
              key={idx}
              initial={initialAnimation}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ y: -8, rotate: -1 }}
              transition={{ duration: 0.25, delay: idx * 0.1, ease: 'anticipate' }}
              viewport={{ once: false, amount: 0.3 }}
              className="rounded-2xl p-6 bg-white/20 backdrop-blur-md border border-gray-300 shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-center flex-col gap-2 mb-4">
                <span className="text-[#4B0082]">{category.icon}</span>
                <h3 className="text-xl font-semibold text-center text-gray-800">{category.category}</h3>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm text-gray-800 bg-white border border-gray-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
