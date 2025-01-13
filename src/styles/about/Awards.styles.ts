import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AwardsSectionContainer = styled.div`
  padding: var(--spacing-section) 0;
  background: var(--color-background);
  position: relative;
  overflow: hidden;
`;

export const AwardsContainer = styled.div`
  max-width: var(--spacing-container);
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: var(--font-size-section);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 6rem;
  opacity: 0.2;
`;

export const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  position: relative;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const AwardIcon = styled(motion.div)`
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background: ${({ theme }) => theme.mode === 'light' ? 'var(--color-border)' : 'rgba(255, 255, 255, 0.03)'};
  border: 1px solid var(--color-border);
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: ${({ theme }) => theme.mode === 'light' ? 'var(--color-border)' : 'rgba(255, 255, 255, 0.05)'};
    
    .award-tooltip {
      opacity: 1;
      transform: translateY(0);
    }
  }

  svg {
    width: 40%;
    height: 40%;
    margin-bottom: 1rem;
    color: var(--color-accent);
  }

  h3 {
    font-size: var(--font-size-caption);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-text);
    opacity: 0.8;
  }
`;

export const AwardTooltip = styled.div`
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: ${({ theme }) => theme.mode === 'light' ? 'var(--color-background)' : 'rgba(0, 0, 0, 0.9)'};
  border: 1px solid var(--color-border);
  padding: 1rem;
  border-radius: 0.5rem;
  width: 200px;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 10;

  p {
    font-size: var(--font-size-caption);
    line-height: 1.4;
    opacity: 0.8;
  }

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 12px;
    height: 12px;
    background: inherit;
    border-left: 1px solid var(--color-border);
    border-top: 1px solid var(--color-border);
  }
`; 