import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './ForestShield.css';

const ForestShield = () => {
  const [showModal, setShowModal] = useState(false);
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    alert(`Thank you for joining the waitlist! We'll notify ${email} when ForestShield is available.`);
    e.target.reset();
    setShowModal(false);
  };

  return (
    <>
      <section className="forestshield section-padding" id="forestshield" ref={ref}>
        <div className="container">
          <motion.div
            className="forestshield-content"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div className="forestshield-text" variants={itemVariants}>
              <div className="badge">Our Flagship Product</div>
              <h2 className="forestshield-title">ForestShield</h2>
              <p className="forestshield-description">
                A smart wildfire response system that fuses
                real-time IoT sensor data, NASA satellite fire detection, and
                intelligent risk scoring to protect forests across Canada.
              </p>
              <div className="forestshield-features">
                <div className="forestshield-feature">
                  <span className="check-icon">✓</span>
                  <span>Real-time sensor monitoring</span>
                </div>
                <div className="forestshield-feature">
                  <span className="check-icon">✓</span>
                  <span>NASA FIRMS wildfire integration</span>
                </div>
                <div className="forestshield-feature">
                  <span className="check-icon">✓</span>
                  <span>AI-powered risk calculation</span>
                </div>
                <div className="forestshield-feature">
                  <span className="check-icon">✓</span>
                  <span>Interactive dashboard visualization</span>
                </div>
              </div>
              <div className="forestshield-buttons">
                <motion.a
                  href="http://forestshield-frontend-466650003123.s3-website-us-east-1.amazonaws.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
                <motion.button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join the Waitlist
                </motion.button>
              </div>
            </motion.div>
            <motion.div className="forestshield-visual" variants={imageVariants}>
              <div className="visual-card">
                <div className="visual-header">
                  <div className="visual-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="visual-title">ForestShield Dashboard</span>
                </div>
                <div className="visual-content">
                  <div className="mock-map">
                    <div className="map-marker marker-high"></div>
                    <div className="map-marker marker-medium"></div>
                    <div className="map-marker marker-low"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {showModal && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ×
            </button>
            <h2>Join the ForestShield Waitlist</h2>
            <p>
              Be among the first to access ForestShield when it launches. We'll
              notify you about early access opportunities and updates.
            </p>
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="organization">Organization (Optional)</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder="Your organization name"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Join Waitlist
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ForestShield;

