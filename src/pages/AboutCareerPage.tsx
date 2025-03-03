import React, { useEffect } from 'react';
import styled from 'styled-components';
import AboutSection from '../components/about/AboutSection';

const PageContainer = styled.main`
  background: var(--color-background);
  min-height: 100vh;
  padding-top: 80px;
`;

const AboutCareerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <AboutSection />
    </PageContainer>
  );
};

export default AboutCareerPage; 