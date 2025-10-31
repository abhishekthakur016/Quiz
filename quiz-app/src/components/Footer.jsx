import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Premium web solutions for modern businesses. Creating digital experiences that matter.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#web">Web Design</a></li>
            <li><a href="#dev">Development</a></li>
            <li><a href="#ui">UI/UX</a></li>
            <li><a href="#seo">SEO</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#facebook" className="social-icon">f</a>
            <a href="#twitter" className="social-icon">𝕏</a>
            <a href="#instagram" className="social-icon">📷</a>
            <a href="#linkedin" className="social-icon">in</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Your Brand. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <span>•</span>
          <a href="#terms">Terms of Service</a>
          <span>•</span>
          <a href="#cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
