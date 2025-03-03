import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ModuleContainer } from './common/Section.styles';

interface ThemeProps {
  theme: {
    mode: 'light' | 'dark';
  };
}

interface StyledCareerRoleProps extends ThemeProps {
  $isActive: boolean;
  $index: number;
}

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

export const Education = styled(motion.div)<ThemeProps>`
  padding: 2rem;
  background: ${({ theme }) => theme.mode === 'light' ? 'var(--color-light-box)' : 'rgba(255, 255, 255, 0.03)'};
  border: 1px solid ${({ theme }) => theme.mode === 'light' ? 'var(--color-light-border)' : 'rgba(255, 255, 255, 0.1)'};

  h3 {
    font-size: var(--font-size-subheading);
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: var(--font-size-body);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: var(--font-size-body);
    opacity: 0.8;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;

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

export const CareerInner = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  margin-top: 8rem;
  padding: 0 clamp(2rem, 5vw, 6rem);
`;

export const CareerTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 6rem);
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-text);
  margin-bottom: clamp(6rem, 8vw, 10rem);
  line-height: 1.1;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    width: clamp(60px, 8vw, 120px);
    height: clamp(4px, 0.5vw, 8px);
    background: var(--color-accent);
    border-radius: 2px;
  }
`;

export const CareerTimeline = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(2rem, 3vw, 3rem);
  width: 100%;
  padding: 2rem;
  perspective: 2000px;
  place-items: center;
  margin: 0 auto;
  max-width: 1800px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CareerRole = styled(motion.div)<StyledCareerRoleProps>`
  width: clamp(400px, 30vw, 550px);
  aspect-ratio: 1;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center center;
  will-change: transform, opacity;
  
  ${({ $isActive }) => $isActive && `
    grid-column: span 3;
    grid-row: span 2;
    width: 100%;
    max-width: 1600px;
    aspect-ratio: auto;
    z-index: 10;

    @media (max-width: 1200px) {
      grid-column: span 2;
    }

    @media (max-width: 768px) {
      grid-column: span 1;
      width: 100%;
    }
  `}

  @media (max-width: 1200px) {
    width: clamp(380px, 45vw, 500px);
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 320px;
    max-width: 450px;
  }

  .expanded-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(2rem, 4vw, 5rem);
    height: 100%;
    padding: clamp(2rem, 3vw, 4rem);

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const ModuleRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 3vw, 4rem);
  height: 100%;
`;

export const TechClientColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const RoleHeader = styled.div<ThemeProps>`
  background: ${({ theme }) => theme.mode === 'light' 
    ? 'linear-gradient(to bottom right, #fff, #f8f8f8)' 
    : 'rgba(255, 255, 255, 0.03)'};
  border: ${({ theme }) => theme.mode === 'light' 
    ? '1px solid rgba(0, 0, 0, 0.8)' 
    : '1px solid rgba(255, 255, 255, 0.8)'};
  outline: ${({ theme }) => theme.mode === 'light'
    ? '1px solid rgba(0, 0, 0, 0.1)'
    : '1px solid rgba(255, 255, 255, 0.1)'};
  outline-offset: -4px;
  box-shadow: ${({ theme }) => theme.mode === 'light'
    ? '0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
    : '0 20px 40px rgba(0, 0, 0, 0.2)'};
  border-radius: clamp(24px, 3vw, 40px);
  padding: clamp(2.5rem, 3vw, 4rem);
  height: 100%;
  width: 100%;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;
  overflow: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;

  &.expanded {
    height: auto;
    grid-column: 1 / -1;
  }

  /* Technical Grid Pattern */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(to right, var(--color-border) 1px, transparent 1px),
      linear-gradient(to bottom, var(--color-border) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: ${({ theme }) => theme.mode === 'light' ? '0.05' : '0.03'};
    z-index: 0;
  }

  /* Diagonal Technical Lines */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 2px,
      var(--color-border) 2px,
      var(--color-border) 3px
    );
    opacity: ${({ theme }) => theme.mode === 'light' ? '0.03' : '0.02'};
    z-index: 0;
  }

  /* Architectural Corner Elements */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 120px;
    height: 120px;
    background: 
      linear-gradient(-45deg, transparent 48%, var(--color-accent) 49%, var(--color-accent) 51%, transparent 52%),
      linear-gradient(45deg, transparent 48%, var(--color-accent) 49%, var(--color-accent) 51%, transparent 52%);
    opacity: 0.1;
    z-index: 1;
  }

  .role-container {
    position: relative;
    z-index: 1;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    padding: 1.5rem;
    border-left: 3px solid var(--color-accent);
  }

  .title-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-size: clamp(0.85rem, 1vw, 1.1rem);
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--color-accent);
      position: relative;
      display: inline-flex;
      padding: 0.75rem 1.5rem;
      background: ${({ theme }) => theme.mode === 'light' 
        ? 'rgba(0, 0, 0, 0.03)' 
        : 'rgba(255, 255, 255, 0.05)'};
      margin-bottom: 1.5rem;
      width: fit-content;
      
      &::before {
        content: '[';
        margin-right: 0.5rem;
        color: var(--color-accent);
        opacity: 0.7;
      }
      
      &::after {
        content: ']';
        margin-left: 0.5rem;
        color: var(--color-accent);
        opacity: 0.7;
      }
    }

    h4 {
      font-size: clamp(1.75rem, 2.5vw, 2.75rem);
      font-weight: 700;
      line-height: 1.2;
      white-space: pre-wrap;
      word-break: break-word;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      margin: 0;
      padding: 0;
    }
  }

  .meta-info {
    margin-top: auto;
    border-top: 1px solid var(--color-border);
    padding-top: 1.5rem;
    width: 100%;
  }

  .corner-accent {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60px;
    height: 60px;
    border-right: 3px solid var(--color-accent);
    border-bottom: 3px solid var(--color-accent);
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.mode === 'light'
      ? '0 30px 60px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
      : '0 30px 60px rgba(0, 0, 0, 0.3)'};

    .corner-accent {
      width: 80px;
      height: 80px;
      opacity: 1;
    }
  }
`;

export const ContentModule = styled.div<ThemeProps>`
  background: ${({ theme }) => theme.mode === 'light' ? 'var(--color-background)' : 'rgba(255, 255, 255, 0.03)'};
  border: 1px solid ${({ theme }) => theme.mode === 'light' ? 'var(--color-light-border)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: clamp(16px, 2vw, 32px);
  padding: clamp(2.5rem, 3vw, 4rem);
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  flex: 1;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

export const ResponsibilitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
  position: relative;
  z-index: 1;

  li {
    position: relative;
    padding-left: clamp(2rem, 2.5vw, 3rem);
    font-size: clamp(0.9rem, 1.1vw, 1.2rem);
    line-height: 1.6;
    margin-bottom: 1rem;

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--color-accent);
      font-weight: 600;
      opacity: 0.7;
      font-family: monospace;
    }

    /* Technical measurement line */
    &::after {
      content: '';
      position: absolute;
      left: 0.5rem;
      top: 50%;
      width: 1rem;
      height: 1px;
      background: var(--color-accent);
      opacity: 0.3;
      transform: translateY(-50%);
    }

    /* Index numbers */
    &:before {
      content: attr(data-index);
      position: absolute;
      left: 0;
      font-family: 'Helvetica Neue', monospace;
      font-size: 0.75rem;
      color: var(--color-accent);
      opacity: 0.5;
      font-weight: normal;
    }
  }
`;

export const TagsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  li {
    font-size: clamp(0.8rem, 1vw, 1rem);
    padding: 0.5rem 1rem;
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 2rem;
    opacity: 0.8;
  }
`;

export const AchievementsList = styled(ResponsibilitiesList)`
  li::before {
    content: '★';
  }
`;

const BaseModule = styled(ModuleContainer)`
  padding: clamp(2.5rem, 3.5vw, 4.5rem);
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.mode === 'light' 
    ? 'linear-gradient(to bottom right, #fff, #f8f8f8)' 
    : 'rgba(255, 255, 255, 0.03)'};
  border: ${({ theme }) => theme.mode === 'light' 
    ? '1px solid rgba(0, 0, 0, 0.1)' 
    : '1px solid rgba(255, 255, 255, 0.1)'};
  border-radius: clamp(16px, 2vw, 24px);
  
  h5 {
    font-size: clamp(1rem, 1.2vw, 1.25rem);
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--color-accent);
    position: relative;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: ${({ theme }) => theme.mode === 'light' 
      ? 'rgba(0, 0, 0, 0.03)' 
      : 'rgba(255, 255, 255, 0.05)'};
    z-index: 1;
    margin: 0 0 1.5rem 0;
    box-shadow: ${({ theme }) => theme.mode === 'light'
      ? 'inset 0 2px 4px rgba(0, 0, 0, 0.03)'
      : 'none'};
    
    &::before {
      content: '[';
      margin-right: 0.5rem;
      color: var(--color-accent);
      opacity: ${({ theme }) => theme.mode === 'light' ? '0.7' : '0.5'};
    }
    
    &::after {
      content: ']';
      margin-left: 0.5rem;
      color: var(--color-accent);
      opacity: ${({ theme }) => theme.mode === 'light' ? '0.7' : '0.5'};
    }
  }
`;

export const ResponsibilitiesModule = styled.div`
  background: ${({ theme }) => theme.mode === 'light' 
    ? 'var(--color-light-box)' 
    : 'rgba(255, 255, 255, 0.03)'};
  border: 1px solid ${({ theme }) => theme.mode === 'light' 
    ? 'var(--color-light-border)' 
    : 'rgba(255, 255, 255, 0.1)'};
  border-radius: clamp(16px, 2vw, 32px);
  padding: clamp(2rem, 3vw, 4rem);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;

  /* Technical Grid Background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(to right, var(--color-border) 1px, transparent 1px),
      linear-gradient(to bottom, var(--color-border) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: ${({ theme }) => theme.mode === 'light' ? '0.03' : '0.02'};
    z-index: 0;
  }

  /* Architectural Corner Element */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: 
      linear-gradient(45deg, transparent 48%, var(--color-border) 49%, var(--color-border) 51%, transparent 52%),
      linear-gradient(-45deg, transparent 48%, var(--color-border) 49%, var(--color-border) 51%, transparent 52%);
    opacity: ${({ theme }) => theme.mode === 'light' ? '0.1' : '0.05'};
    z-index: 0;
  }

  h5 {
    font-size: clamp(1rem, 1.2vw, 1.25rem);
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--color-accent);
    position: relative;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: ${({ theme }) => theme.mode === 'light' 
      ? 'rgba(0, 0, 0, 0.03)' 
      : 'rgba(255, 255, 255, 0.05)'};
    z-index: 1;
    margin: 0;
    box-shadow: ${({ theme }) => theme.mode === 'light'
      ? 'inset 0 2px 4px rgba(0, 0, 0, 0.03)'
      : 'none'};
    
    &::before {
      content: '[';
      margin-right: 0.5rem;
      color: var(--color-accent);
      opacity: ${({ theme }) => theme.mode === 'light' ? '0.7' : '0.5'};
    }
    
    &::after {
      content: ']';
      margin-left: 0.5rem;
      color: var(--color-accent);
      opacity: ${({ theme }) => theme.mode === 'light' ? '0.7' : '0.5'};
    }
  }
`;

export const TechModule = styled(BaseModule)`
  flex: 0.8;
`;

export const ClientsModule = styled(BaseModule)`
  flex: 1.2;
  margin-bottom: 1.5rem;
`;

export const AchievementsModule = styled(BaseModule)`
  flex: 1.2;
`; 