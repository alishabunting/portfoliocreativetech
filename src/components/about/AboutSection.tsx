import React, { useState } from 'react';
import { Section, Container } from '../../styles/common/Section.styles';
import { CareerInner, CareerTitle, CareerTimeline } from '../../styles/AboutSection.styles';
import Biography from './Biography';
import CareerRole from './CareerRole';
import ExpertiseSection from './ExpertiseSection';
import EducationSection from './EducationSection';
import { careerData } from '../../data/careerData';

const AboutSection: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const handleCardToggle = (index: number) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <Section>
      <Container>
        <Biography />
        <ExpertiseSection />
        <EducationSection />
      </Container>

      <CareerInner>
        <CareerTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Professional Journey
        </CareerTitle>
        
        <CareerTimeline>
          {careerData.map((roleData, index) => (
            <CareerRole
              key={index}
              role={roleData.role}
              clients={roleData.clients}
              tech={roleData.tech}
              achievements={roleData.achievements}
              index={index}
              isActive={activeCardIndex === index}
              onToggle={() => handleCardToggle(index)}
              totalCards={careerData.length}
            />
          ))}
        </CareerTimeline>
      </CareerInner>
    </Section>
  );
};

export default AboutSection; 