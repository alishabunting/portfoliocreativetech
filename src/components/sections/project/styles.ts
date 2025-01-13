import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  min-height: 100vh;
  background: var(--color-background);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const ProjectBanner = styled.div`
  width: 100%;
  padding: 0 2rem;
  position: relative;
`;

export const ProjectCard = styled(motion.div)`
  position: relative;
  aspect-ratio: 16/9;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  overflow: hidden;
  background: var(--color-background);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
    z-index: 1;
    opacity: 0.8;
    transition: opacity 500ms ease;
  }

  &:hover {
    &::before {
      opacity: 0.4;
    }

    .project-image {
      transform: scale(1.05);
      filter: grayscale(0%) contrast(1);
    }

    .project-title {
      color: var(--color-accent);
    }
  }
`;

export const ProjectBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(1.2);
    transform-origin: center;
    transition: all 800ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
`;

export const ProjectContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  position: relative;
  max-width: 100%;

  & > *:nth-child(7) {
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    aspect-ratio: calc(32 / 9);

    ${ProjectBackground} {
      width: 100%;
      height: 100%;

      img, video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    ${ProjectContent} {
      max-width: 33.333%;
      margin: 0 auto;
    }
  }

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    
    & > *:nth-child(7) {
      ${ProjectContent} {
        max-width: 50%;
      }
    }
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    
    & > *:nth-child(7) {
      ${ProjectContent} {
        max-width: 100%;
      }
    }
  }
`;

export const ProjectNumber = styled.span`
  font-size: var(--font-size-caption);
  opacity: 0.6;
  letter-spacing: 0.1em;
`;

export const ProjectTitle = styled.h2`
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: white;
  transition: color 500ms ease;
  margin-bottom: 0.5rem;
`;

export const ProjectCategory = styled.span`
  font-size: var(--font-size-caption);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.4;
`;

export const ExpandedProject = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100vh;
  background: var(--color-background);
  color: var(--color-text);
  overflow-y: auto;
  z-index: 1000;
  padding: 2rem;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const ExpandedContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50vh);
  margin-top: 1.5rem;
  position: relative;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    transition: background 300ms ease;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  /* Firefox scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05);
`;

export const ExpandedTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--color-text);
  position: sticky;
  top: 0;
  background: var(--color-background);
  padding: 2rem 2rem 1rem;
  margin: -2rem -2rem 0;
  z-index: 2;
`;

export const ScrollableContent = styled.div`
  overflow-y: auto;
  padding: 2rem;
  height: 100%;
  
  /* Fade effect at the top */
  &::before {
    content: '';
    position: sticky;
    top: 0;
    display: block;
    height: 2rem;
    margin: -2rem -2rem 0;
    background: linear-gradient(var(--color-background), transparent);
    z-index: 1;
  }
`;

export const ProjectDescription = styled.div`
  font-size: var(--font-size-body);
  opacity: 0.8;
  line-height: 1.8;
  white-space: pre-line;

  p {
    margin-bottom: 2rem;
    max-width: 65ch;
  }

  a {
    color: var(--color-text);
    text-decoration: underline;
    transition: opacity 300ms ease;
    display: inline-block;

    &:hover {
      opacity: 0.7;
    }
  }

  h3 {
    font-size: 1.3em;
    font-weight: 700;
    margin: 3rem 0 1.5rem;
    color: var(--color-text);
  }

  ul {
    list-style: none;
    margin: 0 0 2rem;
    padding: 0 0 0 1rem;
  }

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    max-width: 60ch;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--color-text);
      opacity: 0.6;
    }
  }
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Tag = styled.span`
  font-size: var(--font-size-caption);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 3rem;
  transition: all 300ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 300ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  position: relative;
  background: var(--color-background);
  overflow: hidden;
`;

export const CarouselTrack = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const CarouselSlide = styled(motion.div)`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-background);

  img, video {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: grayscale(100%) contrast(1.2);
    transition: filter 500ms ease;
    cursor: pointer;

    &:hover {
      filter: grayscale(0%) contrast(1);
    }
  }
`;

export const FullScreenCarousel = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const FullScreenSlide = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img, video {
    max-width: 90vw;
    max-height: 90vh;
    width: auto;
    height: auto;
    object-fit: contain;
  }

  video {
    width: 90vw;
  }
`;

export const FullScreenClose = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1110;
  opacity: 0.8;
  transition: opacity 300ms ease;

  &:hover {
    opacity: 1;
  }
`;

export const FullScreenNavigation = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 1110;
`;

export const FullScreenButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 300ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const FullScreenCaption = styled.div`
  position: absolute;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 300ms ease;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }
`;

export const SectionHeading = styled.h2`
  color: white;
  font-size: var(--font-size-section);
  font-weight: 700;
  margin-bottom: 4rem;
  text-align: left;
  padding: 0 1rem;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 45vh;
  background: var(--color-background);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Ensure carousel content maintains aspect ratio within the wrapper */
  > * {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img, video {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
`;

export const CarouselNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.1);
`;

export const CarouselDots = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

export const CarouselDot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'var(--color-primary)' : 'var(--color-border)'};
  cursor: pointer;
  padding: 0;
  transition: background 0.3s ease;

  &:hover {
    background: var(--color-primary);
    opacity: 0.8;
  }
`;

export const MediaCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  font-size: 0.9rem;
`; 