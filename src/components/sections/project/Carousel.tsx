import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MediaItem } from './types';
import YouTubeEmbed from './YouTubeEmbed';
import {
  CarouselContainer,
  CarouselTrack,
  CarouselSlide,
  CarouselButton,
  FullScreenCarousel,
  FullScreenSlide,
  FullScreenClose,
  FullScreenNavigation,
  FullScreenButton,
  FullScreenCaption
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
  onGoToSlide
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenSlide, setFullScreenSlide] = useState(0);

  const handleImageClick = (index: number) => {
    setFullScreenSlide(index);
    setIsFullScreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
    document.body.style.overflow = '';
  };

  const nextFullScreenSlide = () => {
    setFullScreenSlide((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevFullScreenSlide = () => {
    setFullScreenSlide((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  return (
    <>
      <CarouselContainer>
        <CarouselTrack
          as={motion.div}
          animate={{ x: `${-currentSlide * 100}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <AnimatePresence initial={false}>
            {gallery.map((item, index) => (
              <CarouselSlide 
                key={index}
                onClick={() => handleImageClick(index)}
              >
                {item.type === 'video' && (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={item.url}
                  />
                )}
                {item.type === 'image' && (
                  <img src={item.url} alt={item.caption || ''} />
                )}
                {item.type === 'youtube' && (
                  <div className="youtube-container">
                    <YouTubeEmbed url={item.url} />
                  </div>
                )}
              </CarouselSlide>
            ))}
          </AnimatePresence>
        </CarouselTrack>

        <CarouselButton className="prev" onClick={onPrev}>
          ←
        </CarouselButton>
        <CarouselButton className="next" onClick={onNext}>
          →
        </CarouselButton>
      </CarouselContainer>

      <AnimatePresence>
        {isFullScreen && (
          <FullScreenCarousel
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FullScreenClose onClick={closeFullScreen}>×</FullScreenClose>
            
            <FullScreenSlide>
              {gallery[fullScreenSlide].type === 'video' ? (
                <video
                  controls
                  autoPlay
                  src={gallery[fullScreenSlide].url}
                />
              ) : gallery[fullScreenSlide].type === 'youtube' ? (
                <div className="youtube-container">
                  <YouTubeEmbed url={gallery[fullScreenSlide].url} />
                </div>
              ) : (
                <img 
                  src={gallery[fullScreenSlide].url} 
                  alt={gallery[fullScreenSlide].caption || ''} 
                />
              )}
            </FullScreenSlide>

            <FullScreenCaption>
              {gallery[fullScreenSlide].caption}
            </FullScreenCaption>

            <FullScreenNavigation>
              <FullScreenButton onClick={prevFullScreenSlide}>
                Previous
              </FullScreenButton>
              <FullScreenButton onClick={nextFullScreenSlide}>
                Next
              </FullScreenButton>
            </FullScreenNavigation>
          </FullScreenCarousel>
        )}
      </AnimatePresence>
    </>
  );
};

export default Carousel; 