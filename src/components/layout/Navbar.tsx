import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';
import ProfileDropdown from './ProfileDropdown';

const Navbar = () => {
  const { isDark } = useTheme();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{ backgroundColor: 'transparent', fontFamily: 'var(--font-primary)', fontWeight: 'var(--font-weight-normal)' }} className="fixed top-0 left-0 right-0 z-50">
      <div className="relative mx-auto px-4 py-4 sm:px-6 lg:px-14 lg:pt-14 pb-4 sm:pb-0">
        <div className="grid grid-cols-3 items-center justify-between h-20">
          {/* Left Side - Navigation Items */}
          <div className={`md:flex items-center space-x-8 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'} font-bold`}>
            <button
              onClick={() => scrollToSection('who-we-are')}
              className="text-stone-200 hover:text-white transition-colors duration-300"
            >
              WHO WE ARE
            </button>
            <Link to="/artists" className="text-stone-200 hover:text-white transition-colors duration-300">
              FAQ
            </Link>
            <Link to="/features" className="text-stone-200 hover:text-white transition-colors duration-300">
              ABOUT
            </Link>
          </div>

          {/* Logo - Centered */}
          <div className={`flex-1 flex justify-center transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
            <Link to="/" className="flex items-center">
              <img src="/images/logo_white.png" alt="Mousa Logo" className="h-10 w-auto mr-3" />
              <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 'var(--font-weight-bold)' }} className="text-[#fff] text-3xl tracking-widest relative">
                MOUSA
              </span>
            </Link>
          </div>

          {/* Right Side - Join Waitlist Button */}
          <div className="justify-end flex items-center">
            {isAuthenticated ? (
              <ProfileDropdown />
            ) : (
              <button
                onClick={() => navigate('/waitlist')}
                className="bg-[#3D2CA1] hover:bg-[#2E1F7A] text-white px-4 py-2 rounded-full transition-colors duration-300 font-medium"
              >
                Join Waitlist
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu - Hidden for now */}
        <div className="hidden">
          {/* Mobile menu content */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;