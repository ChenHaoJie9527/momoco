import React from 'react';
import { useTheme } from '../theme/ThemeContextType';

interface LogoProps {
  width?: number;
  height?: number;
  lightColor?: string;
  darkColor?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = 200,
  height = 60,
  lightColor = '#fff',
  darkColor = '#000',
}) => {
  const { theme } = useTheme();
  const color = theme === 'light' ? darkColor : lightColor;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 60" width={width} height={height}>
      <text
        x="-30"
        y="45"
        fontFamily="Arial, sans-serif"
        fontSize="30"
        fontWeight="bold"
        fill={color}
        letterSpacing="1"
      >
        Momoco
      </text>
    </svg>
  );
};

export default Logo;
