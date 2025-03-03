import React, { Suspense } from 'react';
import { BiographyContainer, BiographyColumn, BiographyParagraph, BiographyWrapper, BiographyImage } from '../../styles/about/Biography.styles';
import ShaderNameBanner from './ShaderNameBanner';

const Biography: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div style={{ height: '400px', background: 'var(--color-background)' }} />}>
        <ShaderNameBanner />
      </Suspense>

      <BiographyWrapper>
        <BiographyImage>
          <img 
            src="/images/profile-1.jpg" 
            alt="Alisha Tené Bunting"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/800x1200/2a2a2a/808080?text=Profile+Image";
            }}
          />
        </BiographyImage>

        <BiographyContainer>
          <BiographyColumn
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BiographyParagraph>
              Alisha Tené Bunting is a New York city-based creative technologist,
              artist, and educator with a unique background that bridges innovative
              brand experiences, creative technology, and data-driven storytelling.
              Alisha's work is informed by her Brooklyn upbringing and a lifelong
              passion for gaming, technology, and digital culture. She currently is
              the Creative Technologist at BBDONY, where she has been instrumental in
              guiding the agency's exploration into Web3, AI, and new business
              innovations.
            </BiographyParagraph>
            <BiographyParagraph>
              Before stepping into her current role, Alisha began her journey at BBDO
              as an Interactive Producer, where she helped shape impactful campaigns
              for major brands such as Mars, FedEx, Meta and The Home Depot. Prior to
              joining BBDO, she worked as a Webmaster at the University of Southern
              California, drawing from her creative work in human rights culture
              change initiatives---experiences that fueled her passion for immersive
              storytelling and digital media.
            </BiographyParagraph>
          </BiographyColumn>

          <BiographyColumn
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <BiographyParagraph>
              Alisha's recent projects include pioneering initiatives like Pedigree's
              Fosterverse, an immersive experience within the metaverse, and Bacardi's
              phygital sneaker launch, which seamlessly combined physical and digital
              elements to elevate brand interaction. Her skill in turning complex
              technologies into accessible, audience-centered experiences has earned
              her industry recognition, including an <em>Honoree</em> title in <em>AI,
              Metaverse, & Virtual Games 2024</em>, a <em>SILVER Experiential Commerce
              Marketing Award</em> for "The Home Depot + Roblox: Creating the DIYers of
              Tomorrow," and a <em>People's Voice Award</em> for <em>Best Community Engagement</em>
              with Pedigree Fosterverse.
            </BiographyParagraph>
            <BiographyParagraph>
              Alisha's work reflects her commitment to leveraging technology and data
              as powerful storytelling tools, fostering new forms of engagement, and
              advancing the creative potential. Her extensive experience in digital
              media, production, and interactive technology reflects her dedication to
              creating audience-driven experiences that push creative boundaries.
              Looking ahead, Alisha remains committed to exploring how emerging
              technologies can continue to transform storytelling, bringing brands and
              communities closer in new and meaningful ways.
            </BiographyParagraph>
          </BiographyColumn>
        </BiographyContainer>

        <BiographyImage>
          <img 
            src="/images/profile-2.jpg"
            alt="Alisha Tené Bunting"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/800x1200/2a2a2a/808080?text=Profile+Image";
            }}
          />
        </BiographyImage>
      </BiographyWrapper>
    </>
  );
};

export default Biography; 