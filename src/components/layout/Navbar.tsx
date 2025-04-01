import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';

const Navbar = () => {
  const { toggleTheme, isDark } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: isDark ? '#000' : '#ffffff' }} className="fixed top-0 left-0 right-0 z-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-[#376E65] text-2xl font-bold tracking-widest relative">
              MOUSA
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#376E65]/30"></span>
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-stone-300 hover:text-[#DA7B93] transition-colors duration-300 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {[
                { name: 'DISCOVER', path: '/discover' },
                { name: 'LIBRARY', path: '/library' },
                { name: 'SEARCH', path: '/search' },
                { name: 'PROFILE', path: '/profile' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative text-stone-300 hover:text-[#DA7B93] transition-colors duration-300 text-sm tracking-wider uppercase group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#376E65] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Icons and Search */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search music..."
                style={{ backgroundColor: isDark ? '#2E151B' : '#f5f5f4' }}
                className="w-64 px-4 py-2 border border-[#1C3334] rounded-full text-stone-300 placeholder-stone-500 focus:outline-none focus:border-[#376E65] transition-colors duration-300"
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button className="text-stone-300 hover:text-[#DA7B93] transition-colors duration-300 p-2 hover:bg-[#376E65]/10 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button
              onClick={toggleTheme}
              className="text-stone-300 hover:text-[#DA7B93] transition-colors duration-300 p-2 hover:bg-[#376E65]/10 rounded-full"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div style={{ backgroundColor: isDark ? '#2F4454' : '#ffffff' }} className="px-2 pt-2 pb-3 space-y-1 rounded-lg mt-2">
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search music..."
                  style={{ backgroundColor: isDark ? '#2E151B' : '#f5f5f4' }}
                  className="w-full px-4 py-2 border border-[#1C3334] rounded-full text-stone-300 placeholder-stone-500 focus:outline-none focus:border-[#376E65] transition-colors duration-300"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            {[
              { name: 'DISCOVER', path: '/discover' },
              { name: 'LIBRARY', path: '/library' },
              { name: 'SEARCH', path: '/search' },
              { name: 'PROFILE', path: '/profile' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 text-stone-300 hover:text-[#DA7B93] hover:bg-[#376E65]/10 rounded-md transition-colors duration-300 text-sm tracking-wider uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <button
                onClick={toggleTheme}
                className="text-stone-300 hover:text-[#DA7B93] transition-colors duration-300 p-2 hover:bg-[#376E65]/10 rounded-full"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;