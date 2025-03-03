import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getCompressedVideo } from '../../utils/videoMapping';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: var(--color-background);
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
  filter: blur(10px) brightness(0.8);
  transform: scale(1.1);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.4)
  );
  backdrop-filter: contrast(1.1);

  :root[data-theme="light"] & {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.4)
    );
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/grain.png');
    opacity: 0.1;
    pointer-events: none;
    mix-blend-mode: overlay;

    :root[data-theme="light"] & {
      opacity: 0.05;
    }
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: var(--spacing-container);
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const TitleContent = styled.div`
  @media (max-width: 1023px) {
    order: 1;
  }
`;

const Title = styled(motion.h1)`
  font-size: var(--font-size-hero);
  font-weight: 700;
  line-height: 1;
  margin-bottom: 2rem;
  text-align: left;

  @media (max-width: 1023px) {
    text-align: center;
    font-size: 12vw;
  }
`;

const Description = styled(motion.p)`
  font-size: var(--font-size-subheading);
  opacity: 0.6;
  margin-bottom: 3rem;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1023px) {
    text-align: center;
    margin: 0 auto 3rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  transform: rotate(-90deg);
  transform-origin: left;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: var(--font-size-caption);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.6;
  z-index: 2;

  &::before {
    content: '';
    width: 2rem;
    height: 1px;
    background: var(--color-text);
    display: block;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <VideoBackground autoPlay muted loop playsInline>
        <source src={getCompressedVideo('/videos/purplefluid_bg.mp4')} type="video/mp4" />
      </VideoBackground>
      <Overlay />
      
      <Content>
        <TitleContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ALISHA TENÉ BUNTING
          </Title>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           Award-winning Creative Technologist, Artist, and Educator
          </Description>
        </TitleContent>
      </Content>

      <ScrollIndicator>Scroll to explore</ScrollIndicator>
    </HeroSection>
  );
};

export default Hero; 