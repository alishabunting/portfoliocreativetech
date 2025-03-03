import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Project } from './types';
import ProjectCard from './ProjectCard';
import Carousel from './Carousel';
import WebGrid from './WebGrid';
import YouTubeEmbed from './YouTubeEmbed';
import {
  Section,
  ProjectBanner,
  ProjectGrid,
  ExpandedProject,
  ExpandedContent,
  ProjectInfo,
  ExpandedTitle,
  ExpandedAgency,
  ProjectDescription,
  ProjectTags,
  Tag,
  CloseButton,
  SectionHeading,
  CarouselWrapper,
  ScrollableContent
} from './styles';
import { getCompressedVideo } from '../../../utils/videoMapping';

const ProjectSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects: Project[] = [
    {
      title: "BACARDÍ® x Stadium Goods SNEAK3ASY",
      category: "Experiential & WEB3",
      image: getCompressedVideo("/projects/bacardi/feature-demo.mp4"),
      description: "A groundbreaking collaboration between Bacardi and legendary designer Jeff Staple, merging physical and digital realms in an innovative speakeasy experience. Technical partner, Kollectiff orchestrated a seamless integration of technology and experiential elements. The project transformed a Stadium Goods location into an interactive journey, beginning with an exclusive pop-up shop that led to a hidden speakeasy featuring live DJ performances. Through custom-built web applications and Eventbrite integration, guests received airdropped NFTs and discovered strategically placed QR codes throughout the venue, enabling real-time customization of digital sneakers co-designed by Bacardi and Jeff Staple. This cutting-edge fusion of sneaker culture and blockchain technology culminated in select winners having their digital designs transformed into physical, limited-edition sneakers, bridging the gap between digital ownership and tangible collectibles in this unique brand activation.",
      tags: ["Experiential", "Digital Integration", "Brand Experience"],
      agency: "BBDO",
      gallery: [
        { type: 'video', url: getCompressedVideo('/projects/bacardi/feature-demo.mp4'), caption: 'Feature Demo' },
        { type: 'video', url: getCompressedVideo('/projects/bacardi/main-video.mp4'), caption: 'Main Experience Video' },
        { type: 'image', url: '/projects/bacardi/gettyimages-1496827987-2048x2048.jpg', caption: 'Event Space Detail' },
        { type: 'image', url: '/projects/bacardi/gettyimages-1496828006-2048x2048.jpg', caption: 'Interactive Experience' },
        { type: 'image', url: '/projects/bacardi/gettyimages-1496828130-2048x2048.jpg', caption: 'Interactive Bar Display' },
        { type: 'image', url: '/projects/bacardi/gettyimages-1496827902-2048x2048.jpg', caption: 'Event Atmosphere 3' },
        { type: 'image', url: '/projects/bacardi/gettyimages-1496827874-2048x2048.jpg', caption: 'Event Detail' },
        { type: 'image', url: '/projects/bacardi/gettyimages-1496828081-2048x2048.jpg', caption: 'Event Overview' }
      ]
    },
    {
      title: "®Pedigree Fosterverse",
      category: "Metaverse & Social Impact",
      image: getCompressedVideo("/projects/pedigree/design-sample.mp4"),
      description: "A metaverse initiative that bridges virtual and real-world pet adoption through digital twins of 28 shelter dog breeds. In partnership with Adopt-a-Pet and the Pedigree Foundation, we created an innovative system where each digital twin in Decentraland serves as an interactive NPC chatbot, mirroring real adoptable dogs from the Adopt-a-Pet database. Users can engage with virtual dogs to learn about adoption opportunities, donate to the Pedigree Foundation's mission to end dog homelessness, and participate in mini-games. The experience rewards Decentraland landholders who foster virtual dogs with limited-edition NFT wearables, effectively turning virtual properties into digital awareness billboards for pet adoption. This pioneering approach combines Web3 technology with social impact, creating an emotionally resonant experience that reimagines pet adoption for the digital age.",
      agency: "BBDO",
      tags: ["Metaverse", "Social Impact", "Web3"],
      gallery: [
        { type: 'image', url: '/projects/pedigree/thumbnail.jpg', caption: 'Project Showcase' },
        { type: 'image', url: '/projects/pedigree/hero.jpg', caption: 'Hero Display' },
        { type: 'image', url: '/projects/pedigree/showcase.jpg', caption: 'Pedigree Fosterverse Experience' },
        { type: 'video', url: getCompressedVideo('/projects/pedigree/feature-demo.mp4'), caption: 'Main Experience Overview' },
        { type: 'video', url: getCompressedVideo('/projects/pedigree/main-video.mp4'), caption: 'Feature Demonstration' },
        { type: 'image', url: '/projects/pedigree/Dog Lovers_16-9.jpg', caption: 'Dog Lovers Community' },
        { type: 'image', url: '/projects/pedigree/PedigreeFosterverseKV.png', caption: 'Fosterverse Key Visual' },
        { type: 'image', url: '/projects/pedigree/hero.jpg', caption: 'Hero Display' }
      ]
    },
    {
      title: "Ray-Ban® Stories",
      category: "Digital Production & Transcreation",
      image: getCompressedVideo("/projects/rayban/RBS_SPSU_20220427_KV2MKT5050_WAYF_SHINYBLACK_G15_1920x1080_06_EN.mp4"),
      description: "A comprehensive multi-region launch campaign for Ray-Ban Stories, executed in partnership with Meta and Luxottica across the US, UK, and Italian markets. Led the production and transcreation of digital assets for the Spring/Summer collection, encompassing social media videos, digital display banners, and social image assets. The project required careful adaptation of brand messaging and creative elements to resonate with distinct regional audiences while maintaining Ray-Ban's iconic brand identity. This strategic collaboration resulted in cohesive yet culturally nuanced digital experiences across all target markets.",
      agency: "BBDO, ∞ META",
      tags: ["Transcreation", "Digital Innovation", "Social Media", "Regional Launch"],
      gallery: [
        { type: 'image', url: '/projects/rayban/hero.jpg', caption: 'Ray-Ban Stories Launch' },
        { type: 'image', url: '/projects/rayban/showcase.jpg', caption: 'Digital Integration' },
        { type: 'video', url: getCompressedVideo('/projects/rayban/main-video.mp4'), caption: 'Feature Demonstration' },
        { type: 'image', url: '/projects/rayban/RBS_SPSU_20220419_KV2MKTWIDE_WAYF_SHINYBLACK_CLEAR_1920x1080_NA_EN.jpg', caption: 'Marketing Wide Display' },
        { type: 'image', url: '/projects/rayban/RBS_SPSU_20220420_PRODUCTLISTENPIN_WAYF_SHINYBLACK_G15_1000x1500_NA_EN.jpg', caption: 'Product Listen Pin' },
        { type: 'image', url: '/projects/rayban/RBS_SPSU_20220422_PRODUCTCAPTUREPIN_WAYF_SHINYBLACK_G15_1000x1500_NA_EN.jpg', caption: 'Product Capture Pin' },
        { type: 'image', url: '/projects/rayban/SPSU_20220318_ShareLiveitPostit_WAYF_SHINYBLACK_G15_970x250_ShopNow_IT.jpg', caption: 'Share Live It Post' },
        { type: 'image', url: '/projects/rayban/SPSU_20220414_ShareLiveitPostit_WAYF_SHINYBLACK_G15_300x600_LearnMore_IT.jpg', caption: 'Share Live It Learn' },
        { type: 'image', url: '/projects/rayban/RBS_SPSU_20220427_CAPTUREDISPLAY_WAYF_SHINYBLACK_G15_970x250_NA_EN.jpg', caption: 'Capture Display' }
      ]
    },
    {
      title: "Home Depot & Roblox",
      category: "Gaming & Retail Innovation",
      image: "https://i.ytimg.com/vi_webp/afs4cMoOzzo/maxresdefault.webp",
      videoPreview: {
        type: 'youtube',
        id: 'afs4cMoOzzo',
        thumbnails: [
          'https://i.ytimg.com/vi/afs4cMoOzzo/0.jpg',
          'https://i.ytimg.com/vi/afs4cMoOzzo/1.jpg',
          'https://i.ytimg.com/vi/afs4cMoOzzo/2.jpg',
          'https://i.ytimg.com/vi/afs4cMoOzzo/3.jpg'
        ]
      },
      description: "A Roblox integration bringing The Home Depot's hands-on learning experience into Roblox's Redcliff City. Produced the creative concept and gameplay development strategy through close collaboration with strategy, creative, business affairs, and client stakeholders to validate and refine the experience. This innovative virtual Kids Workshop reimagines DIY education for the next generation, featuring an immersive storefront complete with orange-aproned virtual associates. Players embark on engaging project builds across three difficulty levels - from crafting birdhouses to assembling mini cars - through an interactive scavenger hunt format. The experience seamlessly blends retail innovation with gamified learning, allowing young DIYers to collect materials throughout virtual aisles and assemble projects in a dedicated workshop space. Successfully completed builds become permanent, usable items within the Redcliff City environment, creating lasting value and encouraging creative problem-solving through hands-on virtual construction.",
      tags: ["Gaming", "Retail", "Metaverse", "Interactive"],
      gallery: [
        { type: 'youtube', url: 'https://www.youtube.com/watch?v=afs4cMoOzzo', caption: 'Home Depot Roblox Experience Overview' },
        { type: 'image', url: '/projects/homedepot/hero.jpg', caption: 'Home Depot Roblox Experience' },
        { type: 'video', url: '/projects/homedepot/gameplay.mp4', caption: 'Gameplay Demo' },
        { type: 'image', url: '/projects/homedepot/interface.jpg', caption: 'User Interface' },
        { type: 'image', url: '/projects/homedepot/store.jpg', caption: 'Virtual Store' }
      ]
    },
    {
      title: "Innovation",
      category: "Research & Development",
      image: getCompressedVideo("/projects/showcase/vfx/mummyvfx.mp4"),
      description: "Cutting-edge research and development projects exploring emerging technologies across VFX, Stop Motion, Voice AI, and 3D Modeling.",
      tags: ["VFX", "Stop Motion", "Voice AI", "3D Modeling", "Innovation"],
      gallery: [
        { type: 'video', url: getCompressedVideo('/projects/showcase/stopmotion/Squirell_3.mp4'), caption: 'Stop Motion Animation' },
        { type: 'video', url: getCompressedVideo('/projects/showcase/vfx/CONST_final_text.mp4'), caption: 'Constellations Animation' },
        { type: 'video', url: getCompressedVideo('/projects/showcase/vfx/7670af44-bc30-4a8e-871b-2409a3d48af1.mp4'), caption: 'VFX Showcase' },
        { type: 'video', url: getCompressedVideo('/projects/showcase/vfx/5eb0df95-e47b-45f9-be59-3986b5266734.mp4'), caption: 'VFX Demo 1' },
        { type: 'video', url: getCompressedVideo('/projects/showcase/vfx/acf92f4c-bd15-4f71-88aa-b3b84054c42b.mp4'), caption: 'VFX Demo 2' },
        { type: 'image', url: '/projects/showcase/model/1.jpg', caption: 'Model 1' },
        { type: 'image', url: '/projects/showcase/model/2.jpg', caption: 'Model 2' },
        { type: 'image', url: '/projects/showcase/model/3.jpg', caption: 'Model 3' },
        { type: 'image', url: '/projects/showcase/model/4.jpg', caption: 'Model 4' },
        { type: 'image', url: '/projects/showcase/model/5.jpg', caption: 'Model 5' },
        { type: 'image', url: '/projects/showcase/model/6.jpg', caption: 'Model 6' },
        { type: 'image', url: '/projects/showcase/model/7.jpg', caption: 'Model 7' },
        { type: 'image', url: '/projects/showcase/model/8.jpg', caption: 'Model 8' },
        { type: 'image', url: '/projects/showcase/model/9.jpg', caption: 'Model 9' }
      ]
    },
    {
      title: "Web",
      category: "Web",
      image: "/projects/web/thumbnail.jpg",
      description: "A collection of interactive web experiences and digital platforms showcasing modern web development and design.",
      tags: ["Web Development", "UI/UX", "Interactive", "Digital Platforms"],
      gallery: [],
      websites: [
        {
          url: "https://www.bbdola.com/",
          name: "BBDO LA",
          description: "Managed the agency's Squarespace website, ensuring consistent client updates, content transcription, and accessibility compliance. Maintained regular content updates to showcase the agency's work and capabilities."
        },
        {
          url: "https://admission.usc.edu",
          name: "USC Admissions",
          description: "Managed critical web platforms for USC's Undergraduate Admissions, Graduate Admissions, Financial Aid, and Registrar offices. Led complex website redesign migration while maintaining continuous service and USC brand integrity."
        },
        {
          url: "https://letsbreakthrough.org",
          name: "Breakthrough",
          description: "Led end-to-end creative process and comprehensive website redesign as Creative Manager. Developed and executed in-house creative campaigns while managing content strategy across all organizational initiatives."
        },
        {
          url: "https://www.hemob.org",
          name: "The Coalition for Hemophilia B",
          description: "Directed website redesign initiative and visual design as Communications Director. Established communication strategies and managed digital presence while strengthening partnerships with healthcare organizations."
        }
      ]
    },
    {
      title: "VISUAL ARTS",
      category: "PHOTO & VIDEO",
      image: getCompressedVideo("/projects/photography/Our Stories_ In Vivid Color Official Teaser OurStoriesInVividColor.mp4"),
      description: "A curated collection of photographic works showcasing visual storytelling through the lens, featuring a diverse range of styles from infrared to lifestyle photography.",
      tags: ["Photography", "Visual Arts", "Digital Media"],
      gallery: [
        { type: 'youtube' as const, url: getCompressedVideo('/projects/photography/alisha_reel_2160p.mp4'), caption: 'Alisha Tené Bunting Reel' },
        { type: 'video' as const, url: getCompressedVideo('/projects/photography/Charlie\'s Story Teaser Our Stories_ In Vivid Color.mp4'), caption: 'Charlie\'s Story Teaser' },
        { type: 'video' as const, url: getCompressedVideo('/projects/photography/Our Stories_ In Vivid Color Official Teaser OurStoriesInVividColor.mp4'), caption: 'Our Stories In Vivid Color Teaser' },
        { type: 'image', url: '/projects/photography/1_Infrared Florals.png', caption: 'Infrared Florals' },
        { type: 'image', url: '/projects/photography/2_DSF6354.png', caption: 'Urban Landscape' },
        { type: 'image', url: '/projects/photography/3_Hailey Lifestyle.png', caption: 'Hailey Lifestyle' },
        { type: 'image', url: '/projects/photography/4_DSF0990.png', caption: 'Street Photography' },
        { type: 'image', url: '/projects/photography/5_DSF4528.png', caption: 'Urban Portrait' },
        { type: 'image', url: '/projects/photography/6_DSF4738.png', caption: 'City Life' },
        { type: 'image', url: '/projects/photography/7_DSF1179', caption: 'Street Scene' },
        { type: 'image', url: '/projects/photography/8_DSF4792.png', caption: 'Urban Exploration' },
        { type: 'image', url: '/projects/photography/9_Fibonacci Infrared.png', caption: 'Fibonacci Infrared' },
        { type: 'image', url: '/projects/photography/10_Addy Sunset.png', caption: 'Addy Sunset' },
        { type: 'image', url: '/projects/photography/11_Arslan Chromatic.png', caption: 'Arslan Chromatic' }
      ]
    }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  const nextSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) =>
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) =>
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Section>
      <ProjectBanner>
        <SectionHeading>Selected Works</SectionHeading>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </ProjectGrid>

        <AnimatePresence>
          {selectedProject && (
            <ExpandedProject
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <CloseButton onClick={handleClose}>×</CloseButton>
              <ExpandedContent>
                {selectedProject.category === 'Web' && selectedProject.websites ? (
                  <WebGrid websites={selectedProject.websites} />
                ) : (
                  <CarouselWrapper>
                    <Carousel
                      gallery={selectedProject.gallery}
                      currentSlide={currentSlide}
                      onNext={nextSlide}
                      onPrev={prevSlide}
                      onGoToSlide={goToSlide}
                    />
                  </CarouselWrapper>
                )}
                <ProjectInfo>
                  <ExpandedTitle>{selectedProject.title}</ExpandedTitle>
                  {selectedProject.agency && <ExpandedAgency>Agency: {selectedProject.agency}</ExpandedAgency>}
                  <ScrollableContent>
                    <ProjectDescription
                      dangerouslySetInnerHTML={{ __html: selectedProject.description }}
                    />
                    <ProjectTags>
                      {selectedProject.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </ProjectTags>
                  </ScrollableContent>
                </ProjectInfo>
              </ExpandedContent>
            </ExpandedProject>
          )}
        </AnimatePresence>
      </ProjectBanner>
    </Section>
  );
};

export default ProjectSection; 