import React from 'react';
import '../App.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src="/profile.jpeg" alt="Srinivasan Headshot" className="profile-pic" />
      <h1>Srinivasan E</h1>
      <p className="tagline">Product Designer | UI/UX Designer</p>
      
      <nav className="social-links">
        <a href="https://www.linkedin.com/in/srinivasan30/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.behance.net/srinisrini9" target="_blank" rel="noopener noreferrer">Behance</a>
        <a href="https://dribbble.com/srinisrini9" target="_blank" rel="noopener noreferrer">Dribbble</a>
      </nav>
      
      <div className="resume">
        <a href="/Srinivasan Resume-1.pdf" target="_blank" className="btn">View Resume</a>
        <a href="/Srinivasan Resume-1.pdf" download className="btn">Download Resume</a>
      </div>
    </aside>
  );
};

export default Sidebar;
