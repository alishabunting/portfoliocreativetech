@echo off
set FFMPEG="I:\ffmpeg\ffmpeg-2025-01-08-git-251de1791e-full_build\bin\ffmpeg.exe"

%FFMPEG% -y -i "public/videos/purplefluid_bg.mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/purplefluid_bg_compressed.mp4"

%FFMPEG% -y -i "public/projects/bacardi/feature-demo.mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/bacardi_feature_demo_compressed.mp4"

%FFMPEG% -y -i "public/projects/bacardi/main-video.mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/bacardi_main_video_compressed.mp4"

%FFMPEG% -y -i "public/projects/pedigree/design-sample.mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/pedigree_design_sample_compressed.mp4"

%FFMPEG% -y -i "public/projects/pedigree/feature-demo.mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/pedigree_feature_demo_compressed.mp4"

%FFMPEG% -y -i "public/projects/showcase/vfx/CONST_final_text.mp4" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "I:/compressed_videos/const_final_text_compressed.mp4" 