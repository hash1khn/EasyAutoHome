import React from 'react';

interface CarLogoProps {
  className?: string;
  size?: number;
}

const CarLogo: React.FC<CarLogoProps> = ({ className = '', size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Car Body */}
      <path
        d="M6 20C6 18.8954 6.89543 18 8 18H24C25.1046 18 26 18.8954 26 20V22C26 23.1046 25.1046 24 24 24H8C6.89543 24 6 23.1046 6 22V20Z"
        fill="#FF6B35"
      />
      
      {/* Car Top */}
      <path
        d="M10 16C10 14.8954 10.8954 14 12 14H20C21.1046 14 22 14.8954 22 16V18H10V16Z"
        fill="#FF6B35"
      />
      
      {/* Windows */}
      <path
        d="M11 15C11 14.4477 11.4477 14 12 14H20C20.5523 14 21 14.4477 21 15V17H11V15Z"
        fill="#FFE8D6"
      />
      
      {/* Wheels */}
      <circle cx="10" cy="22" r="3" fill="#2C2C2C"/>
      <circle cx="22" cy="22" r="3" fill="#2C2C2C"/>
      <circle cx="10" cy="22" r="1.5" fill="#666"/>
      <circle cx="22" cy="22" r="1.5" fill="#666"/>
      
      {/* Headlights */}
      <circle cx="8" cy="19" r="1" fill="#FFD700"/>
      <circle cx="24" cy="19" r="1" fill="#FFD700"/>
      
      {/* Grill */}
      <rect x="12" y="20" width="8" height="1" fill="#2C2C2C"/>
    </svg>
  );
};

export default CarLogo;
