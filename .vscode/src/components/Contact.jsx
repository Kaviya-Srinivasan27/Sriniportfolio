import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <footer className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-info">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:srinimt50@gmail.com">srinimt50@gmail.com</a>
        </p>
        <p>
          <strong>Phone:</strong> +91-6382-850-983
        </p>
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/srinivasan30/" target="_blank" rel="noopener noreferrer" className="social-icon">
          LinkedIn
        </a>
        <a href="https://www.behance.net/srinisrini9" target="_blank" rel="noopener noreferrer" className="social-icon">
          Behance
        </a>
        <a href="https://dribbble.com/srinisrini9" target="_blank" rel="noopener noreferrer" className="social-icon">
          Dribbble
        </a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Srinivasan E. All rights reserved.</p>
    </footer>
  );
};

export default Contact;
