import React from 'react';

interface BackgroundVideoProps {
  src: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  src,
  className = '',
  overlay = true,
  overlayOpacity = 0.4,
  children,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        <source src={src.replace('.mp4', '.ogg')} type="video/ogg" />
      </video>
      
      {/* Optional Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundVideo;
