import React, { useEffect } from 'react';
import styled from 'styled-components';
import AboutSection from '../components/about/AboutSection';
import ExpertiseSection from '../components/about/ExpertiseSection';
import AwardsSection from '../components/about/AwardsSection';
import EducationSection from '../components/about/EducationSection';
import Speaking from '../components/about/Speaking';

const PageContainer = styled.main`
  background: var(--color-background);
  min-height: 100vh;
  padding-top: 80px;
`;

const ContentContainer = styled.div`
  max-width: var(--spacing-container);
  margin: 0 auto;
  padding: 0 2rem;
  overflow: visible; // Ensure content isn't being clipped
`;

const EducationAndSpeaking = styled.div`
  margin-top: 4rem;
`;

const speakingEngagements = [
  {
    title: 'AI in Creative Industries',
    description: 'Regular speaker on AI implementation and creative technology integration in marketing and advertising.'
  },
  {
    title: 'Web3 Education',
    description: 'Workshop leader and educator on blockchain technology and decentralized systems.'
  },
  {
    title: 'Digital Transformation',
    description: 'Featured speaker on guiding teams through technological evolution and adoption.'
  },
  {
    title: 'Diversity in Tech',
    description: 'Advocate and speaker on increasing representation in technology and creative fields.'
  }
];

const AboutCareerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <AboutSection />
      <ContentContainer>
        <ExpertiseSection />
        <EducationAndSpeaking>
          <EducationSection />
          <Speaking speakingEngagements={speakingEngagements} />
        </EducationAndSpeaking>
        <AwardsSection />
      </ContentContainer>
    </PageContainer>
  );
};

export default AboutCareerPage; 