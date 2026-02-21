import React from 'react';
import { profileData } from '../constants/data';
import '../App.css';

const Home = () => {
  return (
    <div className="portfolio-container">
      {/* Sidebar Section */}
      <aside className="sidebar">
        <img src="/image.jpg.jpeg" alt="Srinivasan" className="profile-img" />
        <h1>{profileData.name}</h1>
        <p style={{ color: '#94a3b8' }}>{profileData.role}</p>
        
        <div style={{ marginTop: '40px', textAlign: 'left', fontSize: '14px' }}>
          <p>📧 {profileData.email} [cite: 10]</p>
          <p>📞 {profileData.phone} [cite: 9]</p>
        </div>

        <a href="/Srinivasan resume.pdf" className="btn-primary" download>
          Download Resume
        </a>
      </aside>

      {/* Main Content Section */}
      <main className="main-content">
        <section>
          <h2 className="section-title">Work Experience</h2>
          {profileData.experience.map((exp, index) => (
            <div key={index} className="card">
              <h3>{exp.role} — {exp.company}</h3>
              <p style={{ color: '#60a5fa', fontWeight: 'bold' }}>{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>

        <section style={{ marginTop: '60px' }}>
          <h2 className="section-title">Featured Projects</h2>
          <div className="project-grid">
            {profileData.projects.map((project, index) => (
              <div key={index} className="card">
                <h3>{project.title}</h3>
                <span style={{ fontSize: '12px', background: '#2563eb', padding: '2px 8px', borderRadius: '4px' }}>
                  {project.type}
                </span>
                <p style={{ marginTop: '15px' }}>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;