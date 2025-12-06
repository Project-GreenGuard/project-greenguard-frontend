import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          Protecting Canada's Forests
        </motion.h1>
        <motion.p className="hero-subtitle" variants={itemVariants}>
          AI-Driven Wildfire Response & Prevention
        </motion.p>
        <motion.p className="hero-description" variants={itemVariants}>
          Real-time monitoring, intelligent risk assessment, and early warning
          systems to safeguard our natural heritage
        </motion.p>
        <motion.a
          href="#forestshield"
          className="cta-button"
          variants={itemVariants}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('forestshield');
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore ForestShield
        </motion.a>
      </motion.div>
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="mouse">
          <div className="mouse-wheel" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

