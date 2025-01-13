# Creative Tech Portfolio Site

A modern portfolio website showcasing creative technology projects, built with React, TypeScript, and Framer Motion.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## Project Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd creative-tech-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create required directories:
```bash
mkdir -p public/compressed_videos
```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:3000`

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

- `/src` - Source code
  - `/components` - React components
  - `/utils` - Utility functions
  - `/styles` - Global styles and theme
- `/public` - Static assets
  - `/compressed_videos` - Compressed video files
  - `/projects` - Project assets and media
  - `/videos` - General video assets

## Video Compression

The site uses compressed videos for better performance. To compress new videos:

1. Place original videos in the appropriate directory under `/public/projects/`
2. Use FFmpeg to compress the videos:
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k output_compressed.mp4
```
3. Place compressed videos in `/public/compressed_videos/`
4. Update the video mapping in `src/utils/videoMapping.ts`

## Technologies Used

- React 18
- TypeScript
- Framer Motion
- Styled Components
- Vite