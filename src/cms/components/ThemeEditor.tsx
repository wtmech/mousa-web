import React, { useState, useEffect } from 'react';
import { ThemeConfig, validateThemeConfig } from '../schemas/themeSchema';

interface ThemeEditorProps {
  initialConfig?: Partial<ThemeConfig>;
  onThemeChange: (config: ThemeConfig) => void;
}

const ThemeEditor: React.FC<ThemeEditorProps> = ({
  initialConfig = {},
  onThemeChange
}) => {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(() =>
    validateThemeConfig(initialConfig)
  );

  // Update parent component when theme changes
  useEffect(() => {
    onThemeChange(themeConfig);
  }, [themeConfig, onThemeChange]);

  const handleModeChange = (mode: 'light' | 'dark' | 'system') => {
    setThemeConfig(prev => ({
      ...prev,
      mode,
      // Apply default colors based on mode
      colors: mode === 'dark'
        ? { ...prev.colors, background: '#000000', text: '#F5F5F5' }
        : { ...prev.colors, background: '#FFFFFF', text: '#1F2937' }
    }));
  };

  const handleColorChange = (colorKey: keyof typeof themeConfig.colors, value: string) => {
    setThemeConfig(prev => ({
      ...prev,
      colors: {
        ...prev.colors,
        [colorKey]: value
      }
    }));
  };

  const handleFontFamilyChange = (fontFamily: string) => {
    setThemeConfig(prev => ({
      ...prev,
      fontFamily
    }));
  };

  const handleBorderRadiusChange = (borderRadius: 'none' | 'small' | 'medium' | 'large' | 'full') => {
    setThemeConfig(prev => ({
      ...prev,
      borderRadius
    }));
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Theme Settings</h2>

      {/* Theme Mode */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Theme Mode</h3>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded ${
              themeConfig.mode === 'light'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
            onClick={() => handleModeChange('light')}
          >
            Light
          </button>
          <button
            className={`px-4 py-2 rounded ${
              themeConfig.mode === 'dark'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
            onClick={() => handleModeChange('dark')}
          >
            Dark
          </button>
          <button
            className={`px-4 py-2 rounded ${
              themeConfig.mode === 'system'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
            onClick={() => handleModeChange('system')}
          >
            System
          </button>
        </div>
      </div>

      {/* Color Palette */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(themeConfig.colors).map(([key, value]) => (
            <div key={key} className="flex items-center">
              <label className="w-24 text-sm">{key}</label>
              <div className="flex-1 flex items-center">
                <input
                  type="color"
                  value={value}
                  onChange={(e) => handleColorChange(key as keyof typeof themeConfig.colors, e.target.value)}
                  className="w-10 h-10 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleColorChange(key as keyof typeof themeConfig.colors, e.target.value)}
                  className="ml-2 px-2 py-1 text-sm border rounded w-24"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Font Family */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Font Family</h3>
        <select
          value={themeConfig.fontFamily}
          onChange={(e) => handleFontFamilyChange(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="Inter">Inter</option>
          <option value="Roboto">Roboto</option>
          <option value="Open Sans">Open Sans</option>
          <option value="Montserrat">Montserrat</option>
        </select>
      </div>

      {/* Border Radius */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Border Radius</h3>
        <div className="flex space-x-4">
          {['none', 'small', 'medium', 'large', 'full'].map((radius) => (
            <button
              key={radius}
              className={`px-4 py-2 rounded ${
                themeConfig.borderRadius === radius
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
              onClick={() => handleBorderRadiusChange(radius as 'none' | 'small' | 'medium' | 'large' | 'full')}
            >
              {radius.charAt(0).toUpperCase() + radius.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeEditor;