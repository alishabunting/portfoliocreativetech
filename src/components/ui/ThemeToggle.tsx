import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ToggleButton = styled(motion.button)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
  background: transparent;
  border: 1px solid var(--color-text);
  color: var(--color-text);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: var(--font-size-caption);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-text);
    color: var(--color-background);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Check if user has a theme preference stored
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'dark' | 'light');
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ToggleButton
      onClick={toggleTheme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {theme === 'dark' ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Light
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          Dark
        </>
      )}
    </ToggleButton>
  );
};

export default ThemeToggle; 