import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  padding: 4rem 1.5rem;
  background: var(--color-background);
  border-top: 1px solid var(--color-border);
`;

const FooterContent = styled.div`
  max-width: var(--spacing-container);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

const Copyright = styled(motion.p)`
  font-size: var(--font-size-caption);
  opacity: 0.6;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  
  a {
    font-size: var(--font-size-caption);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.6;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 1;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          © 2024 All rights reserved
        </Copyright>
        
        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href="https://www.linkedin.com/in/alisha-bunting/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://x.com/AlishaBuntingDA" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://github.com/alishabunting" target="_blank" rel="noopener noreferrer">GitHub</a>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 