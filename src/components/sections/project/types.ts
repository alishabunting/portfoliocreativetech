export interface Website {
  url: string;
  name: string;
  description: string;
}

export interface MediaItem {
  type: 'image' | 'video' | 'youtube';
  url: string;
  caption: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  gallery: MediaItem[];
  websites?: Website[];
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