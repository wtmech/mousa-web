/**
 * Theme configuration schema for the artist CMS
 * This defines the structure for theme settings that artists can customize
 */

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system';
  colors: ColorPalette;
  fontFamily: string;
  borderRadius: 'none' | 'small' | 'medium' | 'large' | 'full';
}

// Default theme configurations
export const defaultLightTheme: ThemeConfig = {
  mode: 'light',
  colors: {
    primary: '#FFFFFF',
    secondary: '#F5F5F5',
    accent: '#3B82F6',
    background: '#FFFFFF',
    text: '#1F2937',
  },
  fontFamily: 'Inter',
  borderRadius: 'medium',
};

export const defaultDarkTheme: ThemeConfig = {
  mode: 'dark',
  colors: {
    primary: '#0F0F0F',
    secondary: '#1F1F1F',
    accent: '#3B82F6',
    background: '#000000',
    text: '#F5F5F5',
  },
  fontFamily: 'Inter',
  borderRadius: 'medium',
};

// Schema validation function
export const validateThemeConfig = (config: Partial<ThemeConfig>): ThemeConfig => {
  // Merge with defaults based on mode
  const baseConfig = config.mode === 'dark' ? defaultDarkTheme : defaultLightTheme;

  return {
    ...baseConfig,
    ...config,
    colors: {
      ...baseConfig.colors,
      ...config.colors,
    },
  };
};