import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('pcs-theme');
    return (saved as Theme) || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('pcs-theme', theme);
    document.documentElement.classList.toggle('dark-mode', theme === 'dark');
    document.documentElement.classList.toggle('light-mode', theme === 'light');
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return { theme, toggleTheme, isDark: theme === 'dark' };
}
