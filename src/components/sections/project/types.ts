export interface WebSite {
  url: string;
  name: string;
  description: string;
}

export interface WebProject extends Project {
  websites: WebSite[];
}

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  gallery: { type: string; url: string; caption: string }[];
  websites?: WebSite[];
}

export interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export interface CarouselProps {
  gallery: Project['gallery'];
  currentSlide: number;
  onNext: () => void;
  onPrev: () => void;
  onGoToSlide: (index: number) => void;
  onImageClick?: (url: string, index: number) => void;
} 