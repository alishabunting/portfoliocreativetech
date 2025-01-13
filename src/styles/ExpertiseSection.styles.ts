import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  padding: var(--spacing-section) 0;
  background: var(--color-background);
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: var(--spacing-container);
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Title = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 6rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  color: var(--color-text);
  margin-bottom: clamp(4rem, 8vw, 6rem);
  line-height: 1.1;
  text-align: center;
  opacity: 0.2;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ExpertiseCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 24px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const CardTitle = styled.h3`
  font-size: var(--font-size-large);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`;

export const CardIcon = styled.div`
  font-size: 2rem;
  opacity: 0.6;
`;

export const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    font-size: var(--font-size-medium);
    color: var(--color-text);
    opacity: 0.8;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.75rem;
      width: 0.5rem;
      height: 1px;
      background: var(--color-accent);
    }
  }
`; 