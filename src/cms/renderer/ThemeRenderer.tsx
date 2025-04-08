import React, { useEffect } from 'react';
import { ThemeConfig } from '../schemas/themeSchema';

interface ThemeRendererProps {
  theme: ThemeConfig;
  children: React.ReactNode;
}

const ThemeRenderer: React.FC<ThemeRendererProps> = ({ theme, children }) => {
  // Apply theme settings to CSS variables
  useEffect(() => {
    const root = document.documentElement;

    // Set color variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value as string);
    });

    // Set font family
    root.style.setProperty('--font-family', theme.fontFamily);

    // Set border radius
    const radiusMap = {
      'none': '0',
      'small': '0.25rem',
      'medium': '0.5rem',
      'large': '1rem',
      'full': '9999px'
    };
    root.style.setProperty('--border-radius', radiusMap[theme.borderRadius]);

    // Apply theme mode
    if (theme.mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme.mode === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (theme.mode === 'system') {
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    // Clean up function
    return () => {
      // Reset CSS variables when component unmounts
      Object.keys(theme.colors).forEach(key => {
        root.style.removeProperty(`--color-${key}`);
      });
      root.style.removeProperty('--font-family');
      root.style.removeProperty('--border-radius');
    };
  }, [theme]);

  // Create a style object for the container
  const containerStyle: React.CSSProperties = {
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    fontFamily: theme.fontFamily,
  };

  return (
    <div style={containerStyle} className="min-h-screen">
      {children}
    </div>
  );
};

export default ThemeRenderer;