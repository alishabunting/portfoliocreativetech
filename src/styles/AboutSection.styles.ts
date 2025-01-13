import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ThemeProps {
  theme: {
    mode: 'light' | 'dark';
  };
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
  max-width: 90vw;
  margin: 0 auto;
  padding: 0 clamp(2rem, 5vw, 6rem);
`;

export const CareerTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 6rem);
  font-weight: 900;
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
  display: flex;
  flex-direction: column;
  gap: clamp(6rem, 8vw, 10rem);
  width: 100%;
`;

export const CareerRole = styled(motion.div)<ThemeProps>`
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 3vw, 4rem);
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding-bottom: clamp(4rem, 6vw, 8rem);
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1px;
    background: var(--color-border);
    opacity: 0.2;
  }
`;

export const ModuleRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(2rem, 3vw, 4rem);
  width: 100%;
  max-height: calc(100vh - 200px);

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    max-height: none;
  }
`;

export const TechClientColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: calc(20% - 2rem);
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
    ? '0 10px 30px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
    : 'none'};
  border-radius: clamp(16px, 2vw, 32px);
  padding: clamp(3rem, 4vw, 5rem);
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto minmax(150px, 1fr) auto;
  gap: 2rem;

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
    background-size: 20px 20px;
    opacity: ${({ theme }) => theme.mode === 'light' ? '0.05' : '0.03'};
    z-index: 0;
  }

  .role-container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-self: center;
    padding-right: 2rem;
  }

  h3 {
    font-size: clamp(1rem, 1.2vw, 1.25rem);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--color-accent);
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem;
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

  h4 {
    font-size: clamp(2rem, 3.5vw, 4rem);
    font-weight: 900;
    line-height: 1.1;
    color: var(--color-text);
    text-transform: uppercase;
    letter-spacing: -0.02em;
    position: relative;
    z-index: 1;
    margin: 0;
    padding-left: 3rem;
    padding-right: 1rem;
    white-space: pre-line;
    width: calc(100% - 4rem);
    text-shadow: ${({ theme }) => theme.mode === 'light'
      ? '1px 1px 0 rgba(255, 255, 255, 1), -1px -1px 0 rgba(0, 0, 0, 0.05)'
      : 'none'};
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.7em;
      width: 2rem;
      height: 2px;
      background: var(--color-accent);
      transform: translateY(-50%);
      opacity: ${({ theme }) => theme.mode === 'light' ? '0.7' : '0.5'};
      box-shadow: ${({ theme }) => theme.mode === 'light'
        ? '0 1px 2px rgba(0, 0, 0, 0.1)'
        : 'none'};
    }
  }

  .meta-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    z-index: 1;
    border-top: 1px solid ${({ theme }) => theme.mode === 'light'
      ? 'rgba(0, 0, 0, 0.08)'
      : 'var(--color-border)'};
    padding-top: 2rem;
  }
    
  .duration-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .duration {
    font-size: clamp(1rem, 1.2vw, 1.25rem);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: ${({ theme }) => theme.mode === 'light' ? '0.7' : '0.6'};
    font-family: 'Courier New', monospace;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;

    &::before {
      content: '';
      width: 8px;
      height: 8px;
      background: var(--color-accent);
      transform: rotate(45deg);
      opacity: ${({ theme }) => theme.mode === 'light' ? '0.7' : '0.5'};
      box-shadow: ${({ theme }) => theme.mode === 'light'
        ? '0 1px 2px rgba(0, 0, 0, 0.1)'
        : 'none'};
    }
  }

  .location {
    font-size: var(--font-size-caption);
    opacity: ${({ theme }) => theme.mode === 'light' ? '0.5' : '0.4'};
    text-align: right;
    font-style: italic;
    position: relative;
    padding-right: 1.5rem;
    align-self: flex-end;

    &::after {
      content: '↗';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      color: var(--color-accent);
      font-style: normal;
      opacity: ${({ theme }) => theme.mode === 'light' ? '0.7' : '0.5'};
    }
  }

  .corner-accent {
    position: absolute;
    width: 100px;
    height: 100px;
    right: 0;
    bottom: 0;
    z-index: 0;
    opacity: ${({ theme }) => theme.mode === 'light' ? '0.08' : '0.05'};
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.mode === 'light'
        ? 'var(--color-accent)'
        : 'var(--color-text)'};
      transition: all 0.3s ease;
      box-shadow: ${({ theme }) => theme.mode === 'light'
        ? '0 1px 3px rgba(0, 0, 0, 0.1)'
        : 'none'};
    }
    
    &::before {
      right: 0;
      bottom: 40px;
      width: 2px;
      height: 60px;
    }
    
    &::after {
      right: 40px;
      bottom: 0;
      width: 60px;
      height: 2px;
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.mode === 'light'
      ? '0 20px 40px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
      : '0 20px 40px rgba(0, 0, 0, 0.15)'};
    border: ${({ theme }) => theme.mode === 'light' 
      ? '1px solid rgba(0, 0, 0, 0.9)' 
      : '1px solid rgba(255, 255, 255, 0.9)'};
    outline: ${({ theme }) => theme.mode === 'light'
      ? '1px solid rgba(0, 0, 0, 0.2)'
      : '1px solid rgba(255, 255, 255, 0.2)'};

    .corner-accent {
      &::before {
        height: 80px;
      }
      &::after {
        width: 80px;
      }
    }

    h4::before {
      width: 3rem;
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

  li {
    position: relative;
    padding-left: clamp(1.5rem, 2vw, 2rem);
    font-size: clamp(0.9rem, 1.1vw, 1.2rem);
    line-height: 1.4;

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--color-accent);
      font-weight: 600;
      opacity: 0.7;
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

export const ResponsibilitiesModule = styled(ContentModule)`
  height: 100%;
  padding: clamp(2.5rem, 3.5vw, 4.5rem);
  display: flex;
  flex-direction: column;
`;

export const TechModule = styled(ContentModule)`
  padding: clamp(2.5rem, 3.5vw, 4.5rem);
  display: flex;
  flex-direction: column;
  flex: 0.8;
`;

export const ClientsModule = styled(ContentModule)`
  padding: clamp(2.5rem, 3.5vw, 4.5rem);
  display: flex;
  flex-direction: column;
  flex: 1.2;
`;

export const AchievementsModule = styled(ContentModule)`
  padding: clamp(2.5rem, 3.5vw, 4.5rem);
  display: flex;
  flex-direction: column;
  flex: 1.2;
`; 