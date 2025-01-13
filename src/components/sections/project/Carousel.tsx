import React from 'react';
import { motion } from 'framer-motion';
import { MediaItem } from './types';
import YouTubeEmbed from './YouTubeEmbed';
import {
  CarouselContainer,
  CarouselSlide,
  CarouselNavigation,
  CarouselButton,
  CarouselDots,
  CarouselDot,
  MediaCaption
} from './styles';

interface CarouselProps {
  gallery: MediaItem[];
  currentSlide: number;
  onNext: () => void;
  onPrev: () => void;
  onGoToSlide: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  gallery,
  currentSlide,
  onNext,
  onPrev,
  onGoToSlide,
}) => {
  const currentMedia = gallery[currentSlide];

  return (
    <CarouselContainer>
      <CarouselSlide>
        {currentMedia.type === 'image' && (
          <motion.img
            src={currentMedia.url}
            alt={currentMedia.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
        {currentMedia.type === 'video' && (
          <motion.video
            controls
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <source src={currentMedia.url} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        )}
        {currentMedia.type === 'youtube' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <YouTubeEmbed url={currentMedia.url} />
          </motion.div>
        )}
        <MediaCaption>{currentMedia.caption}</MediaCaption>
      </CarouselSlide>

      <CarouselNavigation>
        <CarouselButton onClick={onPrev}>Previous</CarouselButton>
        <CarouselDots>
          {gallery.map((_, index) => (
            <CarouselDot
              key={index}
              active={index === currentSlide}
              onClick={() => onGoToSlide(index)}
            />
          ))}
        </CarouselDots>
        <CarouselButton onClick={onNext}>Next</CarouselButton>
      </CarouselNavigation>
    </CarouselContainer>
  );
};

export default Carousel; 