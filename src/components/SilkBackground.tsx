import React from 'react';
import Silk from './Silk';

interface SilkBackgroundProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
  className?: string;
}

const SilkBackground: React.FC<SilkBackgroundProps> = ({
  speed = 5,
  scale = 1,
  color = "#1E40AF", // Changed to blue theme
  noiseIntensity = 1.5,
  rotation = 0,
  className = ""
}) => {
  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <Silk
        speed={speed}
        scale={scale}
        color={color}
        noiseIntensity={noiseIntensity}
        rotation={rotation}
      />
    </div>
  );
};

export default SilkBackground;
