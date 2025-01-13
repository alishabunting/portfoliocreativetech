import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BiographyBanner = styled.div`
  width: 100vw;
  aspect-ratio: 32/9;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  margin-top: -80px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BiographyWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(auto, 1200px) minmax(300px, 1fr);
  width: 100vw;
  min-height: 600px;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  margin-bottom: clamp(6rem, 8vw, 10rem);
`;

export const BiographyImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const BiographyContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding: 2rem;
  max-width: var(--spacing-container);
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const BiographyColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 100%;
`;

export const BiographyParagraph = styled.p`
  font-size: var(--font-size-medium);
  line-height: 1.8;
  color: var(--color-text);
  margin: 0;
  padding: 0;
  
  em {
    color: var(--color-accent);
    font-style: normal;
  }
`; 