import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  padding?: 'small' | 'medium' | 'large';
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  backgroundColor = '#FFFFFF',
  textColor = '#000000',
  padding = 'medium',
  className = '',
}) => {
  // Check if the color is a CSS variable (starts with 'var(')
  const isCssVariable = (color: string) => color.startsWith('var(');

  // Determine if textColor is a CSS class, hex value, or CSS variable
  const isTextColorClass = textColor.startsWith('text-');
  const isTextColorHex = textColor.startsWith('#');
  const isTextColorVar = isCssVariable(textColor);

  // Create style objects for direct color application
  const titleStyle = !isTextColorClass && (isTextColorHex || isTextColorVar)
    ? { color: textColor }
    : {};

  const subtitleStyle = !isTextColorClass && (isTextColorHex || isTextColorVar)
    ? { color: textColor }
    : {};

  // Create background style
  const backgroundStyle = isCssVariable(backgroundColor)
    ? { backgroundColor: backgroundColor }
    : { backgroundColor };

  const paddingClasses = {
    small: 'py-8',
    medium: 'py-12',
    large: 'py-20',
  };

  return (
    <section
      id={id}
      className={`w-full ${paddingClasses[padding]} ${className}`}
      style={backgroundStyle}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 ${isTextColorClass ? textColor : ''}`}
                style={titleStyle}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`text-lg md:text-xl ${isTextColorClass ? textColor : ''}`}
                style={subtitleStyle}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;