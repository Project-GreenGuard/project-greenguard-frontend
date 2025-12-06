import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="nav-container">
        <div className="logo">
          <img 
            src="/logo.png" 
            alt="Project GreenGuard Logo" 
            className="logo-icon"
            onError={(e) => {
              e.target.style.display = 'none';
              const placeholder = e.target.parentElement.querySelector('.logo-placeholder');
              if (placeholder) placeholder.style.display = 'flex';
            }}
          />
          <div className="logo-placeholder">
            <div className="logo-placeholder-icon"></div>
          </div>
          <span className="logo-text">Project GreenGuard</span>
        </div>
        <ul className="nav-links">
          <li>
            <button onClick={() => scrollToSection('mission')}>Mission</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('features')}>Features</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('forestshield')}>ForestShield</button>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;

