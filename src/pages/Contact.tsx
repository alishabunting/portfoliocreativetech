import React from 'react';
import styled from 'styled-components';
import ContactSection from '../components/sections/ContactSection';
import Navigation from '../components/layout/Navigation';

const PageContainer = styled.div`
  min-height: 100vh;
  background: var(--color-background);
  color: var(--color-text);
`;

const Contact = () => {
  return (
    <PageContainer>
      <Navigation />
      <ContactSection />
    </PageContainer>
  );
};

export default Contact; 