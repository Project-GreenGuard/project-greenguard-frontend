import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Mission.css';

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="mission section-padding" id="mission" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className="section-title">Our Mission</h2>
          <p className="section-subtitle">
            Safeguarding Canada's natural heritage through technology
          </p>
        </motion.div>
        <motion.div
          className="mission-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="mission-text" variants={itemVariants}>
            <p className="mission-lead">
              Canada's forests are among the world's most precious natural
              resources, covering over 347 million hectares. Yet they face
              increasing threats from wildfires, climate change, and
              environmental degradation.
            </p>
            <p>
              Project GreenGuard is dedicated to protecting these vital
              ecosystems through cutting-edge technology. Our ForestShield
              system combines IoT sensors, AI-powered risk assessment, and
              real-time monitoring to provide early warning systems that can
              save lives, property, and irreplaceable natural habitats.
            </p>
            <p>
              We believe that technology and nature can work together to create
              a sustainable future where forests thrive for generations to come.
            </p>
          </motion.div>
          <motion.div className="mission-image" variants={imageVariants}>
            <div className="image-placeholder">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Canadian Forest Landscape"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;

