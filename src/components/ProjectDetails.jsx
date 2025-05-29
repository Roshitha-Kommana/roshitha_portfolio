import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaWrench,
  FaLightbulb,
} from 'react-icons/fa';

const projectsData = {
  donateease: {
    title: 'DonateEase – Web-Based Donation Platform',
    duration: 'Dec 2024 - Feb 2025',
    technologies: ['HTML', 'JavaScript', 'Firebase', 'Cloudinary'],
    description:
      'Built a web application enabling users to donate across 4 categories (money, clothes, books, electronics). Integrated QR-based UPI payments and Cloudinary API for secure screenshot storage. Enabled conditional dynamic forms with validations and Firestore-based data persistence. Achieved 100% functional donation tracking and improved submission accuracy.',
    liveDemo: 'https://donateease-2f624.web.app/',
    github: 'https://github.com/Roshitha-Kommana/DonateEase',
    keyFeatures: [
      'Multi-category donations: money, clothes, books, electronics',
      'QR code-based UPI payment integration',
      'Dynamic donation forms with validations',
      'Secure screenshot upload with Cloudinary',
      'Firestore for donation data persistence',
      'Real-time donation tracking',
    ],
    imageUrl: '/assets/donate_1.png',
  },
  smartocr: {
    title: 'Smart OCR – Automated Text Extraction System',
    duration: 'July 2024 - Oct 2024',
    technologies: ['Python', 'OpenCV', 'PyMuPDF', 'Tesseract'],
    description:
      'Built an OCR pipeline to extract text from scanned PDFs and images. Applied preprocessing (grayscale, denoising, thresholding) to improve accuracy. Used Tesseract to convert images into structured text for document digitization.',
    liveDemo: null,
    github: 'https://github.com/Roshitha-Kommana/smart_ocr',
    keyFeatures: [
      'Automated text extraction from scanned documents',
      'Image preprocessing to enhance OCR accuracy',
      'Support for PDFs and images',
      'Structured text output for easy document digitization',
    ],
    imageUrl: '/assets/smart_ocr.jpeg',
  },
  helmetdetection: {
    title: 'Helmet Detection System using Computer Vision',
    duration: 'Jan 2025 - Apr 2025',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
    description:
      'Developed a real-time helmet detection system to enhance safety compliance in industrial environments. Utilized computer vision and deep learning techniques to detect whether workers are wearing helmets. The system can alert supervisors if non-compliance is detected, helping reduce workplace accidents.',
    liveDemo: null,
    github: 'https://github.com/Roshitha-Kommana/helmet-detection',
    keyFeatures: [
      'Real-time helmet detection using video streams',
      'Trained custom deep learning models with TensorFlow',
      'Implemented OpenCV for image processing and object detection',
      'Alerts generated for non-compliance detection',
      'Dataset collection and preprocessing for model training',
    ],
    imageUrl: '/assets/bike.png',
  },
  flappybirdclone: {
    title: 'Flappy Bird Game using Java Swing',
    duration: 'Nov 2023 - Dec 2023',
    technologies: ['Java', 'Java Swing'],
    description:
      'Created a desktop version of the classic Flappy Bird arcade game using Java. Implemented real-time game mechanics including gravity-based bird movement, dynamic pipe generation, and score tracking. The game provides a responsive and enjoyable user experience with restart functionality and collision detection.',
    liveDemo: null,
    github: 'https://github.com/Roshitha-Kommana/flappy-bird',
    keyFeatures: [
      'Gravity-based bird movement and jump mechanics',
      'Procedural pipe generation with random gaps',
      'Real-time collision detection and scoring system',
      'Restart functionality upon game over',
      'Smooth rendering with Java Swing repaint mechanism',
    ],
    imageUrl: '/assets/flappy_bird.png',
  },
};

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const project = projectsData[id];

  if (!project) {
    return (
      <div className="pt-20 px-6 max-w-3xl mx-auto text-black min-h-screen flex flex-col justify-center items-center text-center">
        <p className="text-2xl mb-4">Project not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="text-black hover:underline font-semibold flex items-center gap-2"
        >
          <FaArrowLeft /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto min-h-screen text-black">
      <button
        onClick={() => navigate('/#projects')}
        className="mb-6 text-black hover:underline font-semibold flex items-center gap-2 text-base sm:text-lg"
      >
        <FaArrowLeft /> Back
      </button>

      <div className="relative flex flex-col lg:flex-row-reverse items-start bg-white/30 backdrop-blur-xl border border-white/50 shadow-xl rounded-xl overflow-hidden p-4 sm:p-6 gap-6">
        
        {/* Image and Technologies */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <img
            src={project.imageUrl}
            alt={`${project.title} Screenshot`}
            className="w-full h-auto max-h-64 sm:max-h-80 object-contain rounded-md shadow-md mb-4"
          />

          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 mt-4">
            <FaWrench /> Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-black">
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-1">{project.title}</h1>
          <p className="text-sm text-gray-600 mb-4 italic">{project.duration}</p>
          <p className="mb-6 leading-relaxed text-base">{project.description}</p>

          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <FaLightbulb /> Key Features
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded hover:opacity-90 transition text-center"
              >
                Live Demo <FaExternalLinkAlt className="inline ml-1" />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white transition text-center"
            >
              GitHub <FaGithub className="inline ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;