import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SpeakingSection = styled.div`
  margin-top: 4rem;
`;

export const SpeakingTitle = styled(motion.h3)`
  font-size: var(--font-size-subheading);
  font-weight: 700;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

export const SpeakingList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const SpeakingItem = styled(motion.li)`
  padding: 2rem;
  border: 1px solid var(--color-border);
  transition: all 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:hover {
    background: var(--color-border);
  }

  h4 {
    font-size: var(--font-size-body);
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: var(--font-size-body);
    opacity: 0.8;
    line-height: 1.6;
  }
`; 