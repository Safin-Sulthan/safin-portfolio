import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

import Home from './components/Home';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import LearningJourney from './pages/LearningJourney';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import ScrollToTop from './components/ScrolltoTop';

export default function App() {
  const location = useLocation();

  return (
    <>
      {/* Scroll to top on every route change */}
      <ScrollToTop />

      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/learningjourney" element={<LearningJourney />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}
