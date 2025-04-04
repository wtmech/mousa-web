import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
        }}
      >
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-primary/80 to-secondary/90"></div>
      </div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      </div>
      {/* Greek Column Decorative Elements */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-secondary/50 to-transparent"></div>
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-secondary/50 to-transparent"></div>

      <div className="relative z-10 text-center pt-14 w-full">
        <div className="grid grid-cols-1 pb-14">
          <div className="flex flex-row">
            <h2 style={{ fontWeight: 'var(--font-weight-extrabold)' }} className="flex-2 justify-self-start text-9xl tracking-tight mb-6 pl-20 bg-clip-text text-transparent bg-gradient-to-r from-stone-200 to-stone-300 dark:from-stone-300 dark:to-stone-400">
              EMPOWER ARTISTS
            </h2>
            <div className="flex flex-1 items-center px-16 text-[#fff] font-medium text-justify">The independent platform where artists thrive, fans directly support creators, and the community shapes the future of music together.</div>
          </div>
          <h2 style={{ fontWeight: 'var(--font-weight-extrabold)' }} className="text-9xl tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-stone-200 to-stone-300 dark:from-stone-300 dark:to-stone-400">
            ELEVATE MUSIC
          </h2>
          <div className="flex flex-row justify-between">
            <div className="flex justify-center items-center flex-1">
              <span className="text-stone-200 text-md tracking-widest uppercase opacity-50">ΜΟΥΣΑ</span>
            </div>
            <h2 style={{ fontWeight: 'var(--font-weight-extrabold)' }} className="justify-self-end text-9xl tracking-tight mb-6 pr-20 bg-clip-text text-transparent bg-gradient-to-r from-stone-200 to-stone-300 dark:from-stone-300 dark:to-stone-400">
              BUILD COMMUNITY
            </h2>
          </div>
        </div>
        <button
          className="group relative px-12 py-4 text-lg font-medium overflow-hidden bg-accent/10 border-2 border-accent/30 hover:border-accent/50 hover:bg-accent/20 transition-all duration-300"
        >
          <span className="relative z-10 text-stone-200 tracking-wider">Join waitlist</span>
          <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-300"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;