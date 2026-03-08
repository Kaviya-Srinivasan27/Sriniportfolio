import React from 'react';
import { resumeData } from '../constants/data';
import { FaLinkedin, FaBehanceSquare } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-info">
      <h3>CONTACT</h3>
      <p>{resumeData.contact.phone}</p>
      <p>{resumeData.contact.email}</p>
      
      {/* Social Links with Icons */}
      <div className="social-links">
         <a 
           href={resumeData.contact.linkedin} 
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="LinkedIn"
         >
           <FaLinkedin />
         </a> 
         <a 
           href={resumeData.contact.behance} 
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="Behance"
         >
           <FaBehanceSquare />
         </a>
      </div>
    </div>
  );
}

export default Contact;