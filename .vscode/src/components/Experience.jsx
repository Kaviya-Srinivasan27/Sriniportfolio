import React from 'react';
import '../App.css';

const experiences = [
  {
    id: 1,
    company: 'Go Super EdTech',
    role: 'Product Designer',
    period: 'May 2025 - Present',
    responsibilities: [
      'Designed end-to-end UI screens and flows.',
      'Conducted UX research, wireframing, prototyping.',
      'Built and maintained a design system.',
    ],
  },
  {
    id: 2,
    company: 'SBL Software Solution',
    role: 'UI/UX Designer',
    period: 'May 2024 - May 2025',
    responsibilities: [
      'Designed UI for digital asset download platform.',
      'Created wireframes, prototypes, visual designs.',
    ],
  },
  {
    id: 3,
    company: 'Madras Tiger Creative Solutions',
    role: 'Graphic Designer',
    period: 'Dec 2023 - May 2024',
    responsibilities: [
      'Created logos, posters, social media graphics.',
      'Delivered projects with strong brand alignment.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <h3>{exp.company}</h3>
            <span className="role">{exp.role} | {exp.period}</span>
            <ul>
              {exp.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
