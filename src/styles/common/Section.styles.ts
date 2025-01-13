import styled from 'styled-components';

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

export const SectionTitle = styled.h2`
  font-size: var(--font-size-heading);
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--color-text);
`;

export const ModuleContainer = styled.div`
  background: var(--color-module-background);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid var(--color-border);
`; 