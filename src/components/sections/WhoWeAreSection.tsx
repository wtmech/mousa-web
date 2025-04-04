import React from 'react';
import Section from './Section';

const WhoWeAreSection: React.FC = () => {
  return (
    <Section
      id="who-we-are"
      title=""
      subtitle=""
      backgroundColor="var(--primary-color)"
      textColor="var(--background-color)"
      padding="large"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
        <h2
          style={{ fontWeight: 'var(--font-weight-extrabold)' }}
          className="text-6xl md:text-8xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-stone-200 to-stone-300 dark:from-stone-300 dark:to-stone-400"
        >
          Empowering artists and connecting them with their audience
        </h2>
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-primary/20"></div>
          <img
            src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Who We Are"
            className="w-full h-full object-cover object-right transition-all duration-700 ease-in-out transform hover:scale-105"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              maskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>
      </div>

      <div className="mx-auto space-y-6">
        <h3 className="text-2xl font-medium text-[var(--background-color)]">
          The independent platform where artists thrive, fans directly support creators, and the community shapes the future of music together.
        </h3>
        <p className="text-lg leading-relaxed text-[var(--background-color)]">
          MOUSA is reimagining the music experience by creating a platform where artists and fans connect directly. We combine music purchases, artist subscriptions, and personal cloud storage in one seamless experience—giving artists multiple ways to share their work while fans get to truly own their music and support creators they love.
        </p>
        <p className="text-lg leading-relaxed text-[var(--background-color)]">
          Built independently as a Public Benefit Company, MOUSA puts the artist-fan relationship at the center of everything we do. Our platform gives artists unprecedented control over their presence, including customizable pages and custom domain options, while providing fans with a unified library for all their music. Whether you're an artist looking for a better platform or a music lover seeking a more meaningful way to support creators, MOUSA is building the future of music—together with our community.
        </p>
      </div>
    </Section>
  );
};

export default WhoWeAreSection;