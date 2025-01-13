import React from 'react';
import { Education } from '../../styles/about/Education.styles';

const EducationSection: React.FC = () => {
  return (
    <Education
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3>Education</h3>
      <h4>MARYMOUNT MANHATTAN COLLEGE</h4>
      <p>B.A. Communication Arts, Creative Media Concentration</p>
      <ul>
        <li>Dean's List</li>
        <li>Lambda Pi Eta Member (National Communication Association Honor Society)</li>
        <li>Minor in Graphic Design</li>
      </ul>
    </Education>
  );
};

export default EducationSection; 