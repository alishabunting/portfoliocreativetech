import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ModuleContainer } from '../common/Section.styles';

export const CareerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const CareerRole = styled.div`
  background: var(--color-module-background);
  border-radius: var(--border-radius);
  padding: 2rem;
  border: 1px solid var(--color-border);
`;

export const RoleHeader = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: var(--font-size-subheading);
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--color-text);
  }

  p {
    font-size: var(--font-size-medium);
    color: var(--color-text-secondary);
    margin-bottom: 0.25rem;
  }

  span {
    font-size: var(--font-size-small);
    color: var(--color-accent);
  }
`;

export const ModuleRow = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 3fr 2fr;
  }
`;

const BaseModule = styled(ModuleContainer)`
  h4 {
    font-size: var(--font-size-medium);
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--color-text);
  }
`;

export const ResponsibilitiesModule = styled(BaseModule)``;
export const TechModule = styled(BaseModule)``;
export const ClientsModule = styled(BaseModule)`
  margin-bottom: 1.5rem;
`;
export const AchievementsModule = styled(BaseModule)``;

export const ResponsibilitiesList = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  
  li {
    color: var(--color-text);
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`;

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;

  li {
    background: var(--color-tag-background);
    color: var(--color-text);
    padding: 0.25rem 0.75rem;
    border-radius: var(--border-radius-small);
    font-size: var(--font-size-small);
  }
`;

export const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    color: var(--color-text);
    margin-bottom: 1rem;
    line-height: 1.6;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "→";
      position: absolute;
      left: 0;
      color: var(--color-accent);
    }
  }
`; 