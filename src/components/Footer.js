import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
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
            <p className="footer-tagline">
              Protecting Canada's forests through innovation
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Project</h4>
              <ul>
                <li>
                  <a
                    href="https://github.com/Project-GreenGuard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Project-GreenGuard/forestshield"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Repositories</h4>
              <ul>
                <li>
                  <a
                    href="https://github.com/Project-GreenGuard/forestshield-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontend
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Project-GreenGuard/forestshield-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Backend
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Project-GreenGuard/forestshield-infrastructure"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Infrastructure
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Project GreenGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

