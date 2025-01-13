@echo off
set FFMPEG="I:\ffmpeg\ffmpeg-2025-01-08-git-251de1791e-full_build\bin\ffmpeg.exe"

REM Compress the reel with higher quality settings
%FFMPEG% -y -i "I:\AI5LUT\Creative Tech Site\public\projects\photography\alisha_reel_2160p.mp4" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 192k "I:\AI5LUT\Creative Tech Site\public\compressed_videos\alisha_reel_compressed.mp4" 