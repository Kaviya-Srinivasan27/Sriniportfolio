import React from 'react';
import '../App.css';

const projects = [
  {
    id: 1,
    name: 'SuperSchool',
    description: 'Educational platform for students',
  },
  {
    id: 2,
    name: 'StarSchool AI',
    description: 'AI-powered learning management system',
  },
  {
    id: 3,
    name: 'GoSuper EdTech',
    description: 'EdTech solution for online education',
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-icon">🎨</div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
