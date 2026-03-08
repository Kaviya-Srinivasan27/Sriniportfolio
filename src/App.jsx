import React from 'react';
import { resumeData } from './constants/data'; // <-- Fixed path
import Contact from "./pages/Contact.jsx";         // <-- Fixed path
import './App.css';

const App = () => {
  return (
    <div className="portfolio-container">
      
      {/* Left Sidebar */}
      <div className="sidebar">
        <img src="/image.jpg.jpeg" alt="Profile" className="profile-img" />
        
        <button className="btn-primary" onClick={() => window.open('/Srinivasan resume.pdf', '_blank')}>
          View Resume
        </button>
        
        <a href="/Srinivasan resume.pdf" download="Srinivasan_Resume.pdf" className="btn-primary">
          Download Resume
        </a>
        
        {/* Your new, clean Contact component! */}
        <Contact />
        
      </div>

      {/* Right Content Area */}
      <div className="main-content">
        <h1 className="name-title">{resumeData.name}</h1>
        <h2 className="job-title">{resumeData.title}</h2>

        <h2 className="section-title">Work Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="card">
            <h3 className="item-title">{exp.role}</h3>
            <p className="item-subtitle">{exp.company} | {exp.duration}</p>
            <p style={{ lineHeight: '1.6', margin: 0 }}>{exp.description}</p>
          </div>
        ))}

        <h2 className="section-title">Skills & Software</h2>
        <div className="card" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {resumeData.skills.map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>

        <h2 className="section-title">Projects</h2>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="card">
            <h3 className="item-title">{project.name}</h3>
            <p className="item-subtitle">{project.type} | {project.duration}</p>
            <p style={{ lineHeight: '1.6', margin: 0 }}>{project.description}</p>
          </div>
        ))}

        <h2 className="section-title">Education</h2>
        <div className="card">
          {resumeData.education.map((edu, index) => (
            <div key={index} style={{ marginBottom: index !== resumeData.education.length - 1 ? '20px' : '0' }}>
              <h3 className="item-title">{edu.course}</h3>
              <p style={{ margin: '5px 0' }}>{edu.institution}</p>
              <p className="item-subtitle" style={{ margin: 0 }}>{edu.duration}</p>
            </div>
          ))}
        </div>

        <h2 className="section-title">Languages</h2>
        <div className="card">
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            {resumeData.languages.map((lang, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>{lang}</li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default App;