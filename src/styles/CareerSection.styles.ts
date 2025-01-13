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
  padding: 0 1.5rem;
`;

export const Title = styled(motion.h2)`
  font-size: var(--font-size-section);
  font-weight: 700;
  opacity: 0.2;
  margin-bottom: 6rem;
`;

export const Timeline = styled.div`
  position: relative;
  padding-left: 3rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--color-border);
  }
`;

export const TimelineItem = styled(motion.div)`
  position: relative;
  padding-bottom: 6rem;
  
  &:last-child {
    padding-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -3rem;
    top: 0;
    width: 1rem;
    height: 1rem;
    background: var(--color-text);
    border-radius: 50%;
    transform: translateX(-0.3rem);
  }
`;

export const YearLabel = styled.div`
  font-size: var(--font-size-caption);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.4;
  margin-bottom: 1rem;
`;

export const RoleTitle = styled.h3`
  font-size: var(--font-size-project);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

export const CompanyName = styled.div`
  font-size: var(--font-size-subheading);
  font-weight: 700;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

export const Description = styled.div`
  font-size: var(--font-size-body);
  opacity: 0.8;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 2rem;
`;

export const HighlightsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const HighlightCard = styled.div`
  padding: 2rem;
  background: transparent;
  border: 1px solid var(--color-border);
  
  h4 {
    font-size: var(--font-size-caption);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.4;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
      font-size: var(--font-size-body);
      opacity: 0.8;
      
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.75rem;
        width: 0.5rem;
        height: 1px;
        background: var(--color-text);
      }
    }
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

export const TechTag = styled.span`
  font-size: var(--font-size-caption);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.6;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
`; 