import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import ProjectsCertificates from './components/ProjectsCertificates';
import ProjectDetails from './components/ProjectDetails';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ✅ Import Footer

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gradient-to-br from-[#636FA4] to-[#E8CBC0] text-white overflow-x-hidden overflow-y-auto">
            <Hero />
            <About />
            <Education />
            <Skills />
            <ProjectsCertificates />
            <Contact />
            <Footer /> {/* ✅ Footer added here */}
          </div>
        }
      />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
