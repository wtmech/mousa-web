const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section with Greek-inspired Design */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop")'
          }}
        >
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-primary/80 to-secondary/90"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent animate-pulse"></div>
        </div>
        {/* Greek Column Decorative Elements */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-secondary/50 to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-secondary/50 to-transparent"></div>

        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <span className="text-stone-200 text-sm tracking-widest uppercase">ΜΟΥΣΑ</span>
          </div>
          <h1 className="text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-stone-200 to-stone-300 dark:from-stone-300 dark:to-stone-400">
            MOUSA
          </h1>
          <p className="text-xl text-stone-300 dark:text-stone-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            WHERE THE MUSES INSPIRE YOUR MUSICAL JOURNEY
          </p>
          <button className="group relative px-12 py-4 text-lg font-medium overflow-hidden bg-accent/10 border-2 border-accent/30 hover:border-accent/50 hover:bg-accent/20 transition-all duration-300">
            <span className="relative z-10 text-stone-200 tracking-wider">BEGIN YOUR ODYSSEY</span>
            <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-300"></div>
          </button>
        </div>
      </section>

      {/* Featured Playlists with Greek-inspired Design */}
      <section className="py-24 bg-stone-50 dark:bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-dark dark:text-stone-200">FEATURED COLLECTIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "EPIC TALES",
                subtitle: "STORIES IN SONG",
                gradient: "from-accent to-accent/80"
              },
              {
                title: "LYRICAL POETRY",
                subtitle: "MELODIC VERSE",
                gradient: "from-accent to-accent/60"
              },
              {
                title: "MUSICAL HARMONY",
                subtitle: "SONIC BALANCE",
                gradient: "from-accent to-accent/40"
              }
            ].map((playlist, index) => (
              <div key={index} className="group relative cursor-pointer">
                <div className="relative aspect-square overflow-hidden border border-accent/20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${playlist.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-secondary/50 group-hover:bg-secondary/30 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-accent rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                      <div className="w-full h-full flex items-center justify-center text-stone-200 text-2xl">▶</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-medium group-hover:text-stone-200 transition-colors">{playlist.title}</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{playlist.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Releases with Greek-inspired Design */}
      <section className="py-24 bg-stone-100 dark:bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-dark dark:text-stone-200">NEW INSPIRATIONS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="group relative cursor-pointer">
                <div className="relative aspect-square overflow-hidden border border-accent/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-2 border-accent rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                      <div className="w-full h-full flex items-center justify-center text-stone-200 text-xl">▶</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium group-hover:text-stone-200 transition-colors">Song Title {i}</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400">Artist Name</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;