export interface Highlight {
  title: string;
  items: string[];
}

export interface CareerPosition {
  year: string;
  role: string;
  company: string;
  description: string;
  highlights: Highlight[];
  tech: string[];
}

export const career: CareerPosition[] = [
  {
    year: '2023 - Present',
    role: 'Creative Technologist',
    company: 'BBDO Worldwide',
    description: 'Leading AI strategy and implementation across major client portfolios, driving digital transformation through innovative technological solutions and educational initiatives.',
    highlights: [
      {
        title: 'Key Initiatives',
        items: [
          'Developed AI implementation frameworks for FedEx, Wells Fargo, and ExxonMobil',
          'Created custom AI-powered solutions for Martini, Bacardi, and Pepsi',
          'Led strategic client workshops on AI integration',
          'Established best practices for AI tool usage',
          'Pioneered internal AI education programs'
        ]
      },
      {
        title: 'Technologies',
        items: [
          'Stable Diffusion & RunwayML implementation',
          'Large Language Models integration',
          'Custom AI solution development',
          'Technical product strategy',
          'Educational framework development'
        ]
      }
    ],
    tech: ['AI/ML', 'Web3', 'AR/VR', 'Creative Tech', 'Innovation Strategy']
  },
  {
    year: '2022 - Present',
    role: 'Founder',
    company: 'Jumu DAO',
    description: 'Founded and leading a decentralized autonomous organization focused on accessible education and inclusive content experiences in the Web3 space.',
    highlights: [
      {
        title: 'Key Achievements',
        items: [
          'Developed educational framework for underrepresented communities',
          'Created community-driven content strategies',
          'Implemented governance systems',
          'Led diversity initiatives in tech',
          'Established educational partnerships'
        ]
      },
      {
        title: 'Impact Areas',
        items: [
          'Web3 education and accessibility',
          'Community governance systems',
          'Digital inclusion frameworks',
          'Technology democratization',
          'Educational content development'
        ]
      }
    ],
    tech: ['DAO', 'Smart Contracts', 'Web3', 'Community', 'Education']
  }
  // Add other career positions here...
]; 