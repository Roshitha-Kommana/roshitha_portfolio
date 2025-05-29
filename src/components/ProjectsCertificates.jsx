import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FolderKanban, Award, ScrollText } from 'lucide-react';

const projects = [
  {
    id: 'donateease',
    name: 'DonateEase – Web-Based Donation Platform',
    shortDesc: 'Web app enabling donations across multiple categories with QR-based payments and dynamic forms.',
    imageUrl: '/assets/donate.png',
    liveDemo: 'https://donateease-2f624.web.app/',
    github: 'https://github.com/Roshitha-Kommana/DonateEase',
    technologies: ['HTML', 'JavaScript', 'Firebase', 'Cloudinary'],
    keyFeatures: [
      'Built a web application enabling users to donate across 4 categories (money, clothes, books, electronics)',
      'Integrated QR-based UPI payments and Cloudinary API for secure screenshot storage',
      'Enabled conditional dynamic forms with validations and Firestore-based data persistence',
      'Achieved 100% functional donation tracking and improved submission accuracy',
    ],
    date: 'Dec 2024 - Feb 2025',
  },
  {
    id: 'smartocr',
    name: 'Smart OCR – Automated Text Extraction System',
    shortDesc: 'OCR pipeline for scanned PDFs and images with image preprocessing and Tesseract OCR.',
    imageUrl: 'assets/smart_ocr.jpeg',
    liveDemo: null,
    github: 'https://github.com/Roshitha-Kommana/smart_ocr',
    technologies: ['Python', 'OpenCV', 'PyMuPDF', 'Tesseract'],
    keyFeatures: [
      'Built an OCR pipeline to extract text from scanned PDFs and images',
      'Applied preprocessing (grayscale, denoising, thresholding) to improve accuracy',
      'Used Tesseract to convert images into structured text for document digitization',
      'Integrated PyMuPDF to handle PDF-to-image conversion for seamless OCR processing',
    ],
    date: 'N/A',
  },
  {
    id: 'helmetdetection',
    name: 'Helmet Detection Using YOLO – Real-Time Object Detection',
    shortDesc: 'Real-time helmet detection system using YOLO to ensure safety compliance in industrial and traffic environments.',
    imageUrl: '/assets/bike.png',
    liveDemo: null,
    github: 'https://github.com/Roshitha-Kommana/HelmetDetectionYOLO',
    technologies: ['YOLO', 'Python', 'OpenCV', 'Deep Learning', 'Darknet', 'TensorFlow', 'PyTorch'],
    keyFeatures: [
      'Developed a real-time helmet detection system using YOLO object detection algorithm',
      'Processed live video streams to classify individuals based on helmet usage',
      'Implemented bounding box annotations to differentiate helmeted and non-helmeted persons',
      'Optimized detection pipeline for low latency and high accuracy in real-time',
      'Designed for deployment in industrial, construction, and traffic surveillance systems',
    ],
    date: 'Nov 2024 - Dec 2024',
  },
  {
    id: 'flappybirdclone',
    name: 'Flappy Bird – Java-Based Arcade Game Clone',
    shortDesc: 'Desktop version of the classic Flappy Bird game with gravity-based mechanics, dynamic obstacles, and real-time scoring.',
    imageUrl: '/assets/flappy_bird.png',
    liveDemo: null,
    github: 'https://github.com/Roshitha-Kommana/FlappyBird-JS',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API'],
    keyFeatures: [
      'Implemented smooth player controls and collision detection using JavaScript',
      'Created parallax background and animated bird mechanics for a dynamic feel',
      'Built a scoring system and obstacle spawning logic with increasing difficulty',
      'Used Canvas API for rendering graphics in real-time',
      'Designed to work across all major browsers with responsive layout',
    ],
    date: 'Oct 2024',
  },
];

const certificates = [
  { id: 1, imageUrl: '/certificates/leadership.jpg', link: '' },
  { id: 2, imageUrl: '/certificates/cloudcomputing.png', link: '' },
  { id: 3, imageUrl: '/certificates/ai_ml.jpg', link: '' },
  { id: 4, imageUrl: '/certificates/aws_cloud.jpg', link: '' },
  { id: 5, imageUrl: '/certificates/aws_data.jpg', link: '' },
  { id: 6, imageUrl: '/certificates/aws_machine.jpg', link: '' },
  { id: 7, imageUrl: '/certificates/ibm.jpg', link: '' },
  { id: 8, imageUrl: '/certificates/infosys.jpg', link: '' },
  { id: 9, imageUrl: '/certificates/forage.jpg', link: '' },
];

const badges = [
  { id: 1, imageUrl: '/badges/data_engineering.png', link: 'https://www.credly.com/badges/09c70149-670c-4185-af4e-46300c692b10/public_url' },
  { id: 2, imageUrl: '/badges/cloud_foundations.png', link: 'https://www.credly.com/badges/45ae65af-6a33-4b1b-ae27-8bfc303b3363/public_url' },
  { id: 3, imageUrl: '/badges/machine_learning.png', link: 'https://www.credly.com/badges/ff2c6ae1-81df-44cb-a8d9-7d6baa6d0d8c/public_url' },
  { id: 4, imageUrl: '/badges/ai_ibm.png', link: 'https://www.credly.com/badges/46d52684-1054-467c-a7aa-a7998af318c4/public_url' },
  { id: 5, imageUrl: '/badges/ccna_in.png', link: 'https://www.credly.com/badges/d0cb4ce5-82c4-44f1-bb99-dbf3bbc75475/public_url' },
  { id: 6, imageUrl: '/badges/ccna_srwe.png', link: 'https://www.credly.com/badges/3ebe688b-7e27-45f0-8faf-8a28845b5c7b/public_url' },
  { id: 7, imageUrl: '/badges/ccna_ensa.png', link: 'https://www.credly.com/badges/6f64c755-71aa-4717-8b92-8d399a772179/public_url' },
  { id: 8, imageUrl: '/badges/it-essentials.png', link: 'https://www.credly.com/badges/99feaf28-48b7-4806-a38d-47c0622ba555/public_url' },
  { id: 9, imageUrl: '/badges/cybersecurity.png', link: 'https://www.credly.com/badges/980dc4f7-80d5-4322-b59e-8920ac1db095/public_url' },
];

const CertificatesCarousel = ({ certificates }) => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHasAnimated(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerPage(1);
      else if (width < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const visibleCerts = certificates.slice(startIndex, startIndex + itemsPerPage);
  const nextSlide = () => { if (startIndex + itemsPerPage < certificates.length) setStartIndex(startIndex + 1); };
  const prevSlide = () => { if (startIndex > 0) setStartIndex(startIndex - 1); };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="flex justify-center items-center space-x-4 w-full px-4">
        <button onClick={prevSlide} disabled={startIndex === 0}
          className={`rounded-full p-2 text-sm font-bold transition ${startIndex === 0 ? 'opacity-50 cursor-not-allowed bg-white text-gray-500' : 'bg-white text-purple-700 shadow-md hover:bg-purple-200'}`}>
          «
        </button>

        <div className={`flex space-x-6 transition-all duration-500 ease-in-out overflow-x-auto hide-scrollbar ${hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-10'}`}>
          {visibleCerts.map((cert) => (
            <div key={cert.id} className="relative w-56 h-40 sm:w-64 sm:h-48 md:w-72 md:h-52 flex-shrink-0 group bg-white/20 border border-white/30 backdrop-blur-md rounded-lg px-4 py-2 shadow-md transition hover:shadow-xl">
              <div className="w-full h-full flex items-center justify-center">
                <img src={cert.imageUrl} alt={`Certificate ${cert.id}`} className="w-full h-full object-contain rounded-md" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={() => setSelectedCert(cert)} className="text-white text-lg font-semibold hover:underline">View Certificate</button>
              </div>
            </div>
          ))}
        </div>

        {startIndex + itemsPerPage < certificates.length && (
          <button onClick={nextSlide} className="bg-white text-purple-700 hover:bg-purple-200 rounded-full p-2 text-sm font-bold shadow-md">»</button>
        )}
      </div>

      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button onClick={() => setSelectedCert(null)} className="absolute top-6 right-6 text-white text-3xl hover:text-purple-400">&times;</button>
          <img src={selectedCert.imageUrl} alt="Certificate Full View" className="max-w-[90vw] max-h-[90vh] rounded-xl" />
        </div>
      )}
    </div>
  );
};

const BadgesCarousel = ({ badges }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerPage(1);
      else if (width < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setHasAnimated(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const visibleBadges = badges.slice(startIndex, startIndex + itemsPerPage);
  const nextSlide = () => { if (startIndex + itemsPerPage < badges.length) setStartIndex(startIndex + 1); };
  const prevSlide = () => { if (startIndex > 0) setStartIndex(startIndex - 1); };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="flex justify-center items-center space-x-4 w-full px-4">
        <button onClick={prevSlide} disabled={startIndex === 0}
          className={`rounded-full p-2 text-sm font-bold transition ${startIndex === 0 ? 'opacity-50 cursor-not-allowed bg-white text-gray-500' : 'bg-white text-purple-700 shadow-md hover:bg-purple-200'}`}>
          «
        </button>

        <div className={`flex space-x-6 transition-transform duration-700 ease-out overflow-x-auto hide-scrollbar ${hasAnimated ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          {visibleBadges.map((badge) => (
            <a key={badge.id} href={badge.link} target="_blank" rel="noopener noreferrer" className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex-shrink-0 bg-white/20 border border-white/30 backdrop-blur-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow flex items-center justify-center">
              <img src={badge.imageUrl} alt={`Badge ${badge.id}`} className="w-[90%] h-[90%] object-contain" />
            </a>
          ))}
        </div>

        {startIndex + itemsPerPage < badges.length && (
          <button onClick={nextSlide} className="bg-white text-purple-700 hover:bg-purple-200 rounded-full p-2 text-sm font-bold shadow-md">»</button>
        )}
      </div>
    </div>
  );
};

const ProjectsCertificates = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [showAll, setShowAll] = useState(false);

  // ✅ Updated hash detection using URLSearchParams
  useEffect(() => {
    const url = new URL(window.location.href);
    const tabParam = new URLSearchParams(url.hash.split('?')[1]).get('tab');
    if (['certificates', 'badges'].includes(tabParam)) {
      setActiveTab(tabParam);
      const section = document.getElementById('projects');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="px-4 sm:px-6 md:px-10 py-20 bg-transparent text-gray-900">
      <motion.h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center text-[#000000]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects & Certificates
      </motion.h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
        {[
          { key: 'projects', label: 'Projects', icon: <FolderKanban className="w-4 h-4 mr-2 text-blue-600" /> },
          { key: 'certificates', label: 'Certificates', icon: <ScrollText className="w-4 h-4 mr-2 text-green-600" /> },
          { key: 'badges', label: 'Badges', icon: <Award className="w-4 h-4 mr-2 text-yellow-500" /> },
        ].map((tab) => (
          <motion.button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              setShowAll(false);
              window.history.replaceState(null, '', `#projects?tab=${tab.key}`);
            }}
            className={`px-6 py-2 rounded-xl font-semibold transition-all duration-100 ease-in-out flex items-center ${
              activeTab === tab.key
                ? 'bg-black text-white shadow-lg'
                : 'bg-white text-black border border-black hover:bg-black hover:text-white hover:border-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Tabs Content */}
      {activeTab === 'projects' && (
        <div id="projects-tab">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {visibleProjects.map((proj, i) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 border border-gray-200 cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div className="w-full aspect-video overflow-hidden rounded-lg bg-gray-200 mb-4">
                  <img src={proj.imageUrl} alt={proj.name} className="w-full h-full object-cover rounded-md" />
                </div>
                <h3 className="text-lg font-bold text-[#4B0082] text-center">{proj.name}</h3>
                <p className="text-sm text-black text-center mt-2">{proj.shortDesc}</p>
                <div className="mt-4 flex justify-between items-center text-sm text-black">
                  {proj.liveDemo ? (
                    <a href={proj.liveDemo} target="_blank" rel="noopener noreferrer" className="hover:underline">Live Demo</a>
                  ) : (
                    <span className="italic text-gray-500">No Demo</span>
                  )}
                  <Link to={`/projects/${proj.id}`} className="hover:underline font-semibold">Full Details →</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {!showAll && projects.length > 3 && (
            <div className="flex justify-center mt-10">
              <motion.button
                onClick={() => setShowAll(true)}
                className="text-black hover:text-black-800 text-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See More ↓
              </motion.button>
            </div>
          )}
        </div>
      )}

      {activeTab === 'certificates' && (
        <div id="certificates-tab">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CertificatesCarousel certificates={certificates} />
          </motion.div>
        </div>
      )}

      {activeTab === 'badges' && (
        <div id="badges-tab">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BadgesCarousel badges={badges} />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ProjectsCertificates;
