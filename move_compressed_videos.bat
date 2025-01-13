@echo off

REM Create the compressed_videos directory in public folder
mkdir "public\compressed_videos"

REM Move all compressed videos from I:/compressed_videos to public/compressed_videos
move "I:\compressed_videos\*.mp4" "public\compressed_videos\"

echo All compressed videos have been moved to public/compressed_videos/ 