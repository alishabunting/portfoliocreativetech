import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Section = styled.section`
  padding: var(--spacing-section) 0;
  background: var(--color-background);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: var(--spacing-container);
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Title = styled(motion.h2)`
  font-size: var(--font-size-section);
  font-weight: 700;
  opacity: 0.2;
  margin-bottom: 6rem;
`;

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`;

const ShowcaseCard = styled(motion.div)`
  padding: 2rem;
  border: 1px solid var(--color-border);
  transition: all 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  
  &:hover {
    background: var(--color-border);
    transform: translateY(-5px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const CardTitle = styled.h3`
  font-size: var(--font-size-subheading);
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CardIcon = styled.div`
  font-size: 2rem;
  opacity: 0.4;
`;

const Description = styled.p`
  font-size: var(--font-size-body);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TechTag = styled.span`
  font-size: var(--font-size-caption);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.6;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
`;

const ProcessList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
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
`;

interface MediaSample {
  type: 'video' | 'image' | 'audio';
  url: string;
}

interface ShowcaseMedia {
  preview: string;
  samples: MediaSample[];
}

interface Showcase {
  title: string;
  icon: string;
  description: string;
  tools: string[];
  process: string[];
  media: ShowcaseMedia;
}

const showcases = [
  {
    title: 'Stop Motion Animation',
    icon: '🎬',
    description: 'Creating dynamic stop motion animations using RunwayML, combining traditional animation techniques with AI-powered motion interpolation and frame generation.',
    tools: ['RunwayML', 'Frame Interpolation', 'Motion Generation'],
    process: [
      'Scene planning and storyboarding',
      'Initial frame capture and setup',
      'AI-powered frame interpolation',
      'Motion smoothing and enhancement',
      'Final composition and export'
    ],
    media: {
      preview: '/showcase/stopmotion-preview.jpg',
      samples: [
        { type: 'video', url: '/showcase/stopmotion-1.mp4' },
        { type: 'image', url: '/showcase/stopmotion-2.jpg' },
        { type: 'video', url: '/showcase/stopmotion-3.mp4' },
        { type: 'image', url: '/showcase/stopmotion-4.jpg' }
      ]
    }
  },
  {
    title: 'Voice Cloning',
    icon: '🎙️',
    description: 'Developing custom voice models using Eleven Labs for personalized audio content and character voiceovers.',
    tools: ['Eleven Labs', 'Voice Synthesis', 'Audio Processing'],
    process: [
      'Voice sample collection',
      'Model training and fine-tuning',
      'Voice clone generation',
      'Quality assessment and refinement',
      'Integration into final product'
    ],
    media: {
      preview: '/showcase/voice-preview.jpg',
      samples: [
        { type: 'audio', url: '/showcase/voice-1.mp3' },
        { type: 'audio', url: '/showcase/voice-2.mp3' },
        { type: 'image', url: '/showcase/voice-3.jpg' },
        { type: 'audio', url: '/showcase/voice-4.mp3' }
      ]
    }
  },
  {
    title: '3D VFX Compositing',
    icon: '🎨',
    description: 'Creating stunning visual effects using Wonder Dynamic Studio, seamlessly blending AI-generated elements with live footage.',
    tools: ['Wonder Dynamic', '3D Compositing', 'VFX'],
    process: [
      'Scene analysis and planning',
      'AI-powered object tracking',
      '3D element generation',
      'Lighting and texture matching',
      'Final composition and color grading'
    ],
    media: {
      preview: '/showcase/vfx-preview.jpg',
      samples: [
        { type: 'video', url: '/showcase/vfx-1.mp4' },
        { type: 'image', url: '/showcase/vfx-2.jpg' },
        { type: 'video', url: '/showcase/vfx-3.mp4' },
        { type: 'image', url: '/showcase/vfx-4.jpg' }
      ]
    }
  },
  {
    title: 'Custom Model Generation',
    icon: '🎯',
    description: 'Building specialized AI models with Adobe Firefly for unique creative applications and brand-specific content generation.',
    tools: ['Adobe Firefly', 'Custom Models', 'Style Transfer'],
    process: [
      'Dataset curation and preparation',
      'Model architecture design',
      'Training and validation',
      'Style refinement and testing',
      'Production deployment'
    ],
    media: {
      preview: '/showcase/model-preview.jpg',
      samples: [
        { type: 'image', url: '/showcase/model-1.jpg' },
        { type: 'image', url: '/showcase/model-2.jpg' },
        { type: 'image', url: '/showcase/model-3.jpg' },
        { type: 'image', url: '/showcase/model-4.jpg' }
      ]
    }
  }
];

const MediaPreview = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 2rem;
  overflow: hidden;
  border: 1px solid var(--color-border);
  cursor: pointer;
  
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 500ms ease;
  }

  &:hover {
    img, video {
      transform: scale(1.05);
    }
  }

  &::after {
    content: '👆 Click to explore';
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: rgba(0, 0, 0, 0.7);
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 0.8rem;
    opacity: 0;
    transition: opacity 300ms ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const ExpandedCard = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ExpandedContent = styled.div`
  max-width: 1200px;
  width: 100%;
  background: var(--color-background);
  padding: 3rem;
  border: 1px solid var(--color-border);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 2rem;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 300ms ease;

  &:hover {
    opacity: 1;
  }
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const MediaItem = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 8px;

  img, video, audio {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  audio {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--color-background);
    padding: 1rem;
  }
`;

const AIShowcaseSection = () => {
  const [selectedShowcase, setSelectedShowcase] = useState<Showcase | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);

  const handleShowcaseClick = (showcase: Showcase) => {
    setSelectedShowcase(showcase);
    setActiveMediaIndex(0);
  };

  const handleClose = () => {
    setSelectedShowcase(null);
    setActiveMediaIndex(0);
  };

  const handleMediaClick = (index: number) => {
    setActiveMediaIndex(index);
  };

  return (
    <Section id="ai-showcase">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.2, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          AI Tools & Applications
        </Title>

        <ShowcaseGrid>
          {showcases.map((showcase, index) => (
            <ShowcaseCard
              key={showcase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => handleShowcaseClick(showcase)}
            >
              <MediaPreview>
                <img src={showcase.media.preview} alt={showcase.title} loading="lazy" />
              </MediaPreview>
              
              <CardHeader>
                <div>
                  <CardTitle>{showcase.title}</CardTitle>
                </div>
                <CardIcon>{showcase.icon}</CardIcon>
              </CardHeader>
              
              <Description>{showcase.description}</Description>
              
              <TechStack>
                {showcase.tools.map(tool => (
                  <TechTag key={tool}>{tool}</TechTag>
                ))}
              </TechStack>
            </ShowcaseCard>
          ))}
        </ShowcaseGrid>

        <AnimatePresence>
          {selectedShowcase && (
            <ExpandedCard
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ExpandedContent>
                <CloseButton onClick={handleClose}>×</CloseButton>
                
                <CardHeader>
                  <div>
                    <CardTitle>{selectedShowcase.title}</CardTitle>
                  </div>
                  <CardIcon>{selectedShowcase.icon}</CardIcon>
                </CardHeader>

                <Description>{selectedShowcase.description}</Description>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <MediaGrid>
                    {selectedShowcase.media.samples.map((sample, index) => (
                      <MediaItem
                        key={index}
                        onClick={() => handleMediaClick(index)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          border: activeMediaIndex === index ? '2px solid var(--color-primary)' : '1px solid var(--color-border)'
                        }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {sample.type === 'video' && (
                          <video controls={activeMediaIndex === index}>
                            <source src={sample.url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        )}
                        {sample.type === 'image' && (
                          <img src={sample.url} alt={`${selectedShowcase.title} sample ${index + 1}`} loading="lazy" />
                        )}
                        {sample.type === 'audio' && (
                          <audio controls={activeMediaIndex === index}>
                            <source src={sample.url} type="audio/mpeg" />
                            Your browser does not support the audio tag.
                          </audio>
                        )}
                      </MediaItem>
                    ))}
                  </MediaGrid>
                </motion.div>

                <TechStack>
                  {selectedShowcase.tools.map(tool => (
                    <TechTag key={tool}>{tool}</TechTag>
                  ))}
                </TechStack>

                <ProcessList>
                  {selectedShowcase.process.map(step => (
                    <li key={step}>{step}</li>
                  ))}
                </ProcessList>
              </ExpandedContent>
            </ExpandedCard>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
};

export default AIShowcaseSection; 