import React from 'react';
import {
  Section,
  Container,
  Title,
  Grid,
  ExpertiseCard,
  CardHeader,
  CardTitle,
  CardIcon,
  SkillsList
} from '../../styles/ExpertiseSection.styles';

const expertiseAreas = [
  {
    title: 'CREATIVE TECHNOLOGY',
    icon: '🚀',
    skills: [
      'AI/ML Implementation',
      'Web3 Development',
      'Interactive Experiences',
      'Emerging Tech Integration',
      'Digital Innovation Strategy'
    ]
  },
  {
    title: 'DEVELOPMENT',
    icon: '💻',
    skills: [
      'React & Modern JavaScript',
      'Three.js & WebGL',
      'Smart Contract Development',
      'API Integration',
      'Responsive Web Design'
    ]
  },
  {
    title: 'PRODUCTION',
    icon: '🎮',
    skills: [
      'Technical Project Management',
      'Interactive Production',
      'Digital Asset Creation',
      'Content Management',
      'Quality Assurance'
    ]
  },
  {
    title: 'EDUCATION & LEADERSHIP',
    icon: '📚',
    skills: [
      'Workshop Development & Facilitation',
      'Technical Team Leadership',
      'Digital Transformation Strategy',
      'Innovation Framework Development',
      'Cross-functional Team Collaboration',
      'Regular speaker on AI implementation',
      'Workshop leader in Web3 education',
      'Featured speaker on digital transformation',
      'Advocate for diversity in tech'
    ]
  }
];

const ExpertiseSection = () => {
  return (
    <Section id="expertise">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.2, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Expertise
        </Title>

        <Grid>
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <CardHeader>
                <div>
                  <CardTitle>{area.title}</CardTitle>
                </div>
                <CardIcon>{area.icon}</CardIcon>
              </CardHeader>
              <SkillsList>
                {area.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </SkillsList>
            </ExpertiseCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default ExpertiseSection; 