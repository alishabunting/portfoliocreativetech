import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Education = styled(motion.div)`
  padding: 2rem;
  background: ${({ theme }) => theme.mode === 'light' ? 'var(--color-border)' : 'rgba(255, 255, 255, 0.03)'};
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: var(--font-size-subheading);
    font-weight: 700;
    margin-bottom: 2rem;
    opacity: 0.8;
  }

  h4 {
    font-size: var(--font-size-body);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: var(--font-size-body);
    opacity: 0.8;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: var(--font-size-body);
      opacity: 0.8;
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      position: relative;

      &:before {
        content: "•";
        position: absolute;
        left: 0;
        color: var(--color-accent);
      }
    }
  }
`; 