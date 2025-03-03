import styled, { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import ProjectSection from './components/sections/project/ProjectSection';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import ThemeToggle from './components/ui/ThemeToggle';
import AboutCareerPage from './pages/AboutCareerPage';
import Contact from './pages/Contact';
import AwardsBanner from './components/sections/AwardsBanner';
import './styles/global.css';

const GlobalStyle = createGlobalStyle`
  body {
    cursor: none;
    @media (max-width: 768px) {
      cursor: auto;
    }
  }
`;

const MainContent = styled.main`
  background: var(--color-background);
`;

// HomePage component containing all sections
const HomePage = () => (
  <MainContent>
    <Hero />
    <AwardsBanner />
    <ProjectSection />
    <Footer />
  </MainContent>
);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <CustomCursor />
      <ThemeToggle />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-career" element={<AboutCareerPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App; 