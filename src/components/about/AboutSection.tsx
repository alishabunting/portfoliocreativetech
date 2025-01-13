import React from 'react';
import { Section, Container } from '../../styles/common/Section.styles';
import { CareerInner, CareerTitle, CareerTimeline } from '../../styles/AboutSection.styles';
import Biography from './Biography';
import CareerRole from './CareerRole';
import { careerData } from '../../data/careerData';

const AboutSection: React.FC = () => {
  return (
    <Section>
      <Container>
        <Biography />
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
            />
          ))}
        </CareerTimeline>
      </CareerInner>
    </Section>
  );
};

export default AboutSection; 