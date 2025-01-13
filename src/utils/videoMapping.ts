// Map of original video paths to their compressed versions
export const videoMapping: Record<string, string> = {
  // Hero video
  '/videos/purplefluid_bg.mp4': '/compressed_videos/purplefluid_bg_compressed.mp4',
  
  // Pedigree videos
  '/projects/pedigree/design-sample.mp4': '/compressed_videos/pedigree_design_sample_compressed.mp4',
  '/projects/pedigree/feature-demo.mp4': '/compressed_videos/pedigree_feature_demo_compressed.mp4',
  '/projects/pedigree/main-video.mp4': '/compressed_videos/pedigree_main_video_compressed.mp4',
  
  // RayBan videos
  '/projects/rayban/RBS_SPSU_20220427_KV2MKT5050_WAYF_SHINYBLACK_G15_1920x1080_06_EN.mp4': '/compressed_videos/rayban_wayf_compressed.mp4',
  '/projects/rayban/main-video.mp4': '/compressed_videos/rayban_main_video_compressed.mp4',
  
  // Home Depot video
  '/projects/homedepot/gameplay.mp4': '/compressed_videos/homedepot_gameplay_compressed.mp4',
  
  // VFX Showcase videos
  '/projects/showcase/vfx/mummyvfx.mp4': '/compressed_videos/mummyvfx_compressed.mp4',
  '/projects/showcase/vfx/7670af44-bc30-4a8e-871b-2409a3d48af1.mp4': '/compressed_videos/vfx_showcase_1_compressed.mp4',
  '/projects/showcase/vfx/5eb0df95-e47b-45f9-be59-3986b5266734.mp4': '/compressed_videos/vfx_demo_1_compressed.mp4',
  '/projects/showcase/vfx/acf92f4c-bd15-4f71-88aa-b3b84054c42b.mp4': '/compressed_videos/vfx_demo_2_compressed.mp4',
  '/projects/showcase/vfx/CONST_final_text.mp4': '/compressed_videos/const_final_text_compressed.mp4',
  
  // Stop Motion
  '/projects/showcase/stopmotion/Squirell_3.mp4': '/compressed_videos/squirell_3_compressed.mp4',
  
  // Photography videos
  '/projects/photography/alisha_reel_2160p.mp4': '/compressed_videos/alisha_reel_compressed.mp4',
  '/projects/photography/Charlie\'s Story Teaser Our Stories_ In Vivid Color.mp4': '/compressed_videos/charlie_story_teaser_compressed.mp4',
  '/projects/photography/Our Stories_ In Vivid Color Official Teaser OurStoriesInVividColor.mp4': '/compressed_videos/our_stories_teaser_compressed.mp4'
};

// Helper function to get compressed video path
export const getCompressedVideo = (originalPath: string): string => {
  return videoMapping[originalPath] || originalPath;
}; 