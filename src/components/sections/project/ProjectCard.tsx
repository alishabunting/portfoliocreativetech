import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ProjectCardProps } from './types';

const Card = styled(motion.div)`
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

const WebPreview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
  transition: all 800ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  filter: grayscale(100%) contrast(1.2);
  
  &::before {
    content: '</>';
    font-size: 4rem;
    font-family: monospace;
    color: white;
    opacity: 0.9;
    transform: rotate(-10deg);
    transition: all 0.3s ease;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
  }

  ${Card}:hover & {
    filter: grayscale(0%) contrast(1);
    transform: scale(1.05);
  }

  ${Card}:hover &::before {
    opacity: 1;
    transform: rotate(0deg) scale(1.1);
  }
`;

const ProjectBackground = styled.div`
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

const ProjectContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectNumber = styled.span`
  font-size: var(--font-size-caption);
  opacity: 0.6;
  letter-spacing: 0.1em;
`;

const ProjectTitle = styled.h2`
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: white;
  transition: color 500ms ease;
  margin-bottom: 0.5rem;
`;

const ProjectCategory = styled.span`
  font-size: var(--font-size-caption);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.4;
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const formattedIndex = String(index + 1).padStart(2, '0');
  const isWebProject = project.category === 'Web';

  return (
    <Card
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <ProjectBackground>
        {isWebProject ? (
          <WebPreview className="project-image" />
        ) : project.image.match(/\.(mp4|mov|webm)$/i) ? (
          <video 
            src={project.image}
            autoPlay
            muted
            loop
            playsInline
            className="project-image"
          />
        ) : (
          <img 
            src={project.image} 
            alt={project.title}
            className="project-image"
          />
        )}
      </ProjectBackground>
      <ProjectContent>
        <ProjectNumber>{formattedIndex}</ProjectNumber>
        <div>
          <ProjectTitle className="project-title">{project.title}</ProjectTitle>
          <ProjectCategory>{project.category}</ProjectCategory>
        </div>
      </ProjectContent>
    </Card>
  );
};

export default ProjectCard; 