@echo off
set FFMPEG="I:\ffmpeg\ffmpeg-2025-01-08-git-251de1791e-full_build\bin\ffmpeg.exe"

REM RayBan videos
%FFMPEG% -y -i "public/projects/rayban/RBS_SPSU_20220427_KV2MKT5050_WAYF_SHINYBLACK_G15_1920x1080_06_EN.mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/rayban_wayf_compressed.mp4"
%FFMPEG% -y -i "public/projects/rayban/main-video.mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/rayban_main_video_compressed.mp4"

REM Home Depot video
%FFMPEG% -y -i "public/projects/homedepot/gameplay.mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/homedepot_gameplay_compressed.mp4"

REM VFX Showcase videos
%FFMPEG% -y -i "public/projects/showcase/vfx/mummyvfx.mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/mummyvfx_compressed.mp4"
%FFMPEG% -y -i "public/projects/showcase/vfx/7670af44-bc30-4a8e-871b-2409a3d48af1.mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/vfx_showcase_1_compressed.mp4"
%FFMPEG% -y -i "public/projects/showcase/vfx/5eb0df95-e47b-45f9-be59-3986b5266734.mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/vfx_demo_1_compressed.mp4"
%FFMPEG% -y -i "public/projects/showcase/vfx/acf92f4c-bd15-4f71-88aa-b3b84054c42b.mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/vfx_demo_2_compressed.mp4"

REM Stop Motion
%FFMPEG% -y -i "public/projects/showcase/stopmotion/Squirell_3.mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/squirell_3_compressed.mp4"

REM Photography videos
%FFMPEG% -y -i "public/projects/photography/alisha_tené_bunting_reel (2160p).mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/alisha_reel_compressed.mp4"
%FFMPEG% -y -i "public/projects/photography/Charlie's Story Teaser Our Stories_ In Vivid Color.mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/charlie_story_teaser_compressed.mp4"
%FFMPEG% -y -i "public/projects/photography/Our Stories_ In Vivid Color Official Teaser OurStoriesInVividColor.mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/our_stories_teaser_compressed.mp4" 