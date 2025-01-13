import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Project } from './types';
import ProjectCard from './ProjectCard';
import Carousel from './Carousel';
import WebGrid from './WebGrid';
import {
  Section,
  ProjectBanner,
  ProjectGrid,
  ExpandedProject,
  ExpandedContent,
  ProjectInfo,
  ExpandedTitle,
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
      title: "Bacardi",
      category: "Experiential & Digital",
      image: "/projects/bacardi/gettyimages-1496827987-2048x2048.jpg",
      description: "Immersive brand experience combining physical and digital elements for Bacardi's event spaces.",
      tags: ["Experiential", "Digital Integration", "Brand Experience"],
      gallery: [
        { type: 'image', url: '/projects/bacardi/gettyimages-1496827987-2048x2048.jpg', caption: 'Event Space Detail' },
        { type: 'image', url: '/projects/bacardi/gettyimages-1496828006-2048x2048.jpg', caption: 'Interactive Experience' },
        { type: 'image', url: '/projects/bacardi/gettyimages-1496828130-2048x2048.jpg', caption: 'Interactive Bar Display' },
        { type: 'image', url: '/projects/bacardi/gettyimages-1496827902-2048x2048.jpg', caption: 'Event Atmosphere 3' },
        { type: 'image', url: '/projects/bacardi/gettyimages-1496827874-2048x2048.jpg', caption: 'Event Detail' },
        { type: 'image', url: '/projects/bacardi/gettyimages-1496828081-2048x2048.jpg', caption: 'Event Overview' }
      ]
    },
    {
      title: "Pedigree Fosterverse",
      category: "Metaverse & Social Impact",
      image: getCompressedVideo("/projects/pedigree/design-sample.mp4"),
      description: "Metaverse initiative connecting virtual pet ownership with real-world dog fostering.",
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
      title: "Ray-Ban Stories",
      category: "Digital Innovation & AR",
      image: getCompressedVideo("/projects/rayban/RBS_SPSU_20220427_KV2MKT5050_WAYF_SHINYBLACK_G15_1920x1080_06_EN.mp4"),
      description: "Innovative AR experience for Ray-Ban Stories launch, combining digital and physical retail spaces.",
      tags: ["AR", "Digital Innovation", "Retail Experience"],
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
      image: "/projects/homedepot/thumbnail.jpg",
      description: "Interactive gaming experience merging Home Depot's retail expertise with Roblox's immersive platform.",
      tags: ["Gaming", "Retail", "Metaverse", "Interactive"],
      gallery: [
        { type: 'image', url: '/projects/homedepot/hero.jpg', caption: 'Home Depot Roblox Experience' },
        { type: 'video', url: '/projects/homedepot/gameplay.mp4', caption: 'Gameplay Demo' },
        { type: 'image', url: '/projects/homedepot/interface.jpg', caption: 'User Interface' },
        { type: 'image', url: '/projects/homedepot/store.jpg', caption: 'Virtual Store' }
      ]
    },
    {
      title: "Innovation",
      category: "Research & Development",
      image: "/projects/showcase/vfx/mummyvfx.mp4",
      description: "Cutting-edge research and development projects exploring emerging technologies across VFX, Stop Motion, Voice AI, and 3D Modeling.",
      tags: ["VFX", "Stop Motion", "Voice AI", "3D Modeling", "Innovation"],
      gallery: [
        { type: 'video', url: '/projects/showcase/vfx/CONST_final_text.mp4', caption: 'Constellations Animation' },
        { type: 'video', url: '/projects/showcase/vfx/7670af44-bc30-4a8e-871b-2409a3d48af1.mp4', caption: 'VFX Showcase' },
        { type: 'video', url: '/projects/showcase/vfx/5eb0df95-e47b-45f9-be59-3986b5266734.mp4', caption: 'VFX Demo 1' },
        { type: 'video', url: '/projects/showcase/vfx/acf92f4c-bd15-4f71-88aa-b3b84054c42b.mp4', caption: 'VFX Demo 2' },
        { type: 'video', url: '/projects/showcase/stopmotion/Squirell_3.mp4', caption: 'Stop Motion Animation' },
        { type: 'image', url: '/projects/showcase/model/a7d77ebe-81cb-478f-a79f-f480ae8dc0a8.jpeg', caption: '3D Model 1' },
        { type: 'image', url: '/projects/showcase/model/1d3c1621-1bde-48e0-9c1b-cbb7482f5c1f.jpeg', caption: '3D Model 2' },
        { type: 'image', url: '/projects/showcase/model/663276f1-e984-47ad-ac9d-a56567fcc625.jpeg', caption: '3D Model 3' }
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
          description: "Digital platform showcasing innovative web design and user experience"
        },
        {
          url: "https://admission.usc.edu",
          name: "USC Admissions",
          description: "University of Southern California's admissions portal with interactive features"
        },
        {
          url: "https://letsbreakthrough.org",
          name: "Breakthrough",
          description: "Platform for social impact and community engagement initiatives"
        },
        {
          url: "https://www.hemob.org",
          name: "HEMOB",
          description: "Healthcare and medical outreach organization's digital presence"
        }
      ]
    },
    {
      title: "Photography",
      category: "Visual Arts & Gallery",
      image: getCompressedVideo("/projects/photography/Our Stories_ In Vivid Color Official Teaser OurStoriesInVividColor.mp4"),
      description: "A curated collection of photographic works showcasing visual storytelling through the lens, featuring a diverse range of styles from infrared to lifestyle photography.",
      tags: ["Photography", "Visual Arts", "Digital Media"],
      gallery: [
        { type: 'video', url: getCompressedVideo('/projects/photography/alisha_reel_2160p.mp4'), caption: 'Alisha Tené Bunting Reel' },
        { type: 'video', url: getCompressedVideo('/projects/photography/Charlie\'s Story Teaser Our Stories_ In Vivid Color.mp4'), caption: 'Charlie\'s Story Teaser' },
        { type: 'video', url: getCompressedVideo('/projects/photography/Our Stories_ In Vivid Color Official Teaser OurStoriesInVividColor.mp4'), caption: 'Our Stories In Vivid Color Teaser' },
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