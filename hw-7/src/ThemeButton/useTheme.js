import { useState, useLayoutEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'theme-light',
  );

  useLayoutEffect(() => {
    const app = document.getElementById('app');
    app.className = `App ${theme}`;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
};
