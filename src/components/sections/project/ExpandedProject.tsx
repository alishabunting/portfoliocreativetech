import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExpandedProjectProps } from './types';
import ProjectCarousel from './ProjectCarousel';
import VideoGrid from './VideoGrid';
import WebGrid from './WebGrid';
import FullscreenView from './FullscreenView';
import {
  ExpandedProject as StyledExpandedProject,
  ExpandedContent,
  ProjectInfo,
  ExpandedTitle,
  ProjectDescription,
  ProjectTags,
  Tag,
  CloseButton,
  ProjectGallery
} from './styles';

const ExpandedProject: React.FC<ExpandedProjectProps> = ({ project, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  const handlePrevSlide = () => {
    setCurrentSlide(current => {
      const imageMedia = project.gallery.filter(item => item.type === 'image');
      return (current - 1 + imageMedia.length) % imageMedia.length;
    });
  };

  const handleNextSlide = () => {
    setCurrentSlide(current => {
      const imageMedia = project.gallery.filter(item => item.type === 'image');
      return (current + 1) % imageMedia.length;
    });
  };

  const handleFullscreenPrev = () => {
    if (fullscreenIndex === null) return;
    setFullscreenIndex((current) => 
      (current - 1 + project.gallery.length) % project.gallery.length
    );
  };

  const handleFullscreenNext = () => {
    if (fullscreenIndex === null) return;
    setFullscreenIndex((current) => 
      (current + 1) % project.gallery.length
    );
  };

  const isWebProject = project.category === 'Web' && project.websites;

  return (
    <StyledExpandedProject
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ExpandedContent>
        <ProjectInfo>
          <CloseButton onClick={onClose}>×</CloseButton>
          <ExpandedTitle>{project.title}</ExpandedTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectTags>
            {project.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </ProjectTags>
        </ProjectInfo>
        
        {isWebProject ? (
          <WebGrid websites={project.websites} />
        ) : (
          <ProjectGallery>
            <ProjectCarousel
              media={project.gallery}
              currentSlide={currentSlide}
              onPrev={handlePrevSlide}
              onNext={handleNextSlide}
              onSlideClick={setFullscreenIndex}
              onDotClick={setCurrentSlide}
            />
            
            {project.gallery.some(media => media.type === 'video') && (
              <VideoGrid
                media={project.gallery}
                onVideoClick={setFullscreenIndex}
              />
            )}
          </ProjectGallery>
        )}
      </ExpandedContent>

      {!isWebProject && fullscreenIndex !== null && (
        <FullscreenView
          media={project.gallery}
          currentIndex={fullscreenIndex}
          onClose={() => setFullscreenIndex(null)}
          onPrev={handleFullscreenPrev}
          onNext={handleFullscreenNext}
          onDotClick={setFullscreenIndex}
        />
      )}
    </StyledExpandedProject>
  );
};

export default ExpandedProject; 