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
      'Large Language Models & Generative AI',
      'AR/VR Development',
      'Web3 & Blockchain Integration',
      'IoT Systems Architecture',
      'Real-time 3D & Spatial Computing',
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
      'Cloud Infrastructure & Scaling',
      'WordPress & CMS Development',
      'PHP & SQL Database Management',
      'HTML/CSS & Responsive Design',
      'Unity Game Development'
    ]
  },
  {
    title: 'PRODUCTION & TOOLS',
    icon: '🎮',
    skills: [
      'Technical Project Management',
      'Interactive Production Pipeline',
      'Gaming Production & Integration',
      'Adobe Creative Suite',
      'Motion Graphics & Animation',
      'Video Production & Editing',
      'Digital Asset Management',
      'UI/UX Design Tools',
      'Content Management Systems'
    ]
  },
  {
    title: 'EDUCATION & LEADERSHIP',
    icon: '📚',
    skills: [
      'Technical Innovation Strategy',
      'Workshop Development & Facilitation',
      'Cross-functional Team Leadership',
      'Digital Transformation Strategy',
      'Innovation Framework Development',
      'Technical Mentorship',
      'Web3 & AI Education',
      'Client & Stakeholder Management'
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