import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ width = 200, height = 60, color = '#333333' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width={width} height={height}>
      <text
        x="10"
        y="45"
        fontFamily="Arial, sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill={color}
        letterSpacing="1"
      >
        momoco
      </text>
    </svg>
  );
};

export default Logo;
