import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 32, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Lotus Flower - Top Petals */}
      <ellipse cx="32" cy="20" rx="8" ry="12" fill="#ec4899" opacity="0.8"/>
      <ellipse cx="32" cy="20" rx="8" ry="12" fill="#ec4899" opacity="0.8" transform="rotate(60 32 32)"/>
      <ellipse cx="32" cy="20" rx="8" ry="12" fill="#ec4899" opacity="0.8" transform="rotate(120 32 32)"/>

      {/* Middle Petals */}
      <ellipse cx="32" cy="24" rx="10" ry="14" fill="#f9a8d4" opacity="0.7" transform="rotate(30 32 32)"/>
      <ellipse cx="32" cy="24" rx="10" ry="14" fill="#f9a8d4" opacity="0.7" transform="rotate(90 32 32)"/>
      <ellipse cx="32" cy="24" rx="10" ry="14" fill="#f9a8d4" opacity="0.7" transform="rotate(150 32 32)"/>

      {/* Outer Petals */}
      <ellipse cx="32" cy="28" rx="12" ry="16" fill="#a855f7" opacity="0.6"/>
      <ellipse cx="32" cy="28" rx="12" ry="16" fill="#a855f7" opacity="0.6" transform="rotate(72 32 32)"/>
      <ellipse cx="32" cy="28" rx="12" ry="16" fill="#a855f7" opacity="0.6" transform="rotate(144 32 32)"/>

      {/* Center Circle */}
      <circle cx="32" cy="32" r="8" fill="#ec4899"/>
      <circle cx="32" cy="32" r="6" fill="#ffffff"/>

      {/* Decorative center dots */}
      <circle cx="32" cy="30" r="1.5" fill="#ec4899"/>
      <circle cx="30" cy="33" r="1.5" fill="#ec4899"/>
      <circle cx="34" cy="33" r="1.5" fill="#ec4899"/>
    </svg>
  );
};

export default Logo;
