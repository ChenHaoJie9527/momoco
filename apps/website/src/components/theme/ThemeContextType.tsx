import { Theme, ThemeManager, ThemeTransitionEffect } from '@theme-smooth/core';
import { createContext, useCallback, useEffect, useMemo, useState } from 'react';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setTransitionDuration: (duration: number) => void;
  setTransitionEffect: (effect: ThemeTransitionEffect) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<React.PropsWithChildren<object>> = ({ children }) => {
  const initialTheme = localStorage.getItem('theme-smooth-preference') || 'light'
  const [themeManager] = useState(
    () =>
      new ThemeManager({
        transitionDuration: 800,
        transitionEffect: 'none',
        initialTheme
      })
  );
  const [theme, setTheme] = useState(themeManager.getTheme());
  useEffect(() => {
    const handleThemeChange = (newTheme: Theme) => {
      setTheme(newTheme);
    };

    themeManager.subscribe(handleThemeChange);
    return () => themeManager.unsubscribe(handleThemeChange);
  }, [themeManager]);

  const toggleTheme = useCallback(() => {
    themeManager.toggleTheme();
  }, [themeManager]);

  const setThemeDirectly = useCallback(
    (newTheme: Theme) => {
      themeManager.setTheme(newTheme);
    },
    [themeManager]
  );

  const setTransitionDuration = useCallback(
    (duration: number) => {
      themeManager.setTransitionDuration(duration);
    },
    [themeManager]
  );

  const setTransitionEffect = useCallback(
    (effect: ThemeTransitionEffect) => {
      themeManager.setTransitionEffect(effect);
    },
    [themeManager]
  );

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      setTheme: setThemeDirectly,
      setTransitionDuration,
      setTransitionEffect,
    }),
    [theme, toggleTheme, setThemeDirectly, setTransitionDuration, setTransitionEffect]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};


