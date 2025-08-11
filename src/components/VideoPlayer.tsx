import React from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  poster?: string;
  preload?: 'none' | 'metadata' | 'auto';
  width?: string | number;
  height?: string | number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  className = '',
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
  poster,
  preload = 'metadata',
  width,
  height,
}) => {
  return (
    <video
      className={`w-full h-auto ${className}`}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      poster={poster}
      preload={preload}
      width={width}
      height={height}
    >
      <source src={src} type="video/mp4" />
      <source src={src.replace('.mp4', '.webm')} type="video/webm" />
      <source src={src.replace('.mp4', '.ogg')} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
