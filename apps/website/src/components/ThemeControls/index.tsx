import React from 'react';
import { Button } from '../ui/button';
import SunSvg from '../common/SunSvg';
import MoonSvg from '../common/MoonSvg';
import { useTheme } from '../theme/ThemeContextType';

const ThemeControls: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className="border p-2 rounded-md"
      onClick={toggleTheme}
      variant={'outline'}
    >
      {theme === 'light' ? <MoonSvg /> : <SunSvg />}
    </Button>
  );
};

export default ThemeControls;
