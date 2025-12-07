import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Features.css';

const features = [
  {
    icon: '/icons/iot.png',
    title: 'Real-Time IoT Monitoring',
    description:
      'ESP32 sensors deployed across forest areas continuously collect temperature, humidity, and environmental data, transmitting information every 30 seconds for immediate analysis.',
  },
  {
    icon: '/icons/nasa.png',
    title: 'NASA FIRMS Integration',
    description:
      "Direct integration with NASA's Fire Information for Resource Management System provides satellite-based wildfire detection and proximity analysis.",
  },
  {
    icon: '/icons/ai.png',
    title: 'AI-Powered Risk Assessment',
    description:
      'Advanced algorithms analyze multiple data sources to calculate real-time wildfire risk scores, combining sensor data, fire proximity, and environmental conditions.',
  },
  {
    icon: '/icons/dashboard.png',
    title: 'Interactive Dashboard',
    description:
      'Comprehensive web-based visualization with interactive maps, real-time sensor status, risk heatmaps, and detailed analytics for forest management teams.',
  },
  {
    icon: '/icons/warning.png',
    title: 'Early Warning System',
    description:
      'Automated alerts and notifications when risk levels exceed thresholds, enabling rapid response and proactive fire prevention measures.',
  },
  {
    icon: '/icons/cloud.png',
    title: 'Cloud Infrastructure',
    description:
      'Scalable AWS-based architecture ensures reliable data processing, storage, and access from anywhere, with automatic scaling to handle peak loads.',
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="features section-padding" id="features" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className="section-title">How We Protect Forests</h2>
          <p className="section-subtitle">
            Advanced technology for comprehensive forest monitoring
          </p>
        </motion.div>
        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="feature-icon">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="feature-icon-placeholder" style={{ display: 'none' }}></div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

