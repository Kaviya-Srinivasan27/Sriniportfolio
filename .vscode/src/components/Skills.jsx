import React from 'react';
import '../App.css';

const skills = [
  'User Research',
  'Wireframing & Prototyping',
  'Usability Testing',
  'Visual Design',
  'Responsive Design',
  'Design System Creation',
  'Figma',
  'Adobe XD',
  'Sketch',
  'Photoshop',
  'Illustrator',
  'HTML/CSS',
  'JavaScript',
  'React',
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
