import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isDark, toggleTheme } = useTheme();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent hover:ring-accent/50 transition-all duration-200"
      >
        <img
          src="https://ui-avatars.com/api/?name=User&background=3D2CA1&color=fff&size=128"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-1 ${
            isDark ? 'bg-primary' : 'bg-white'
          } ring-1 ring-black ring-opacity-5`}
        >
          <Link
            to="/profile"
            className={`block px-4 py-2 text-sm ${
              isDark ? 'text-stone-300 hover:bg-stone-800' : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
          <Link
            to="/settings"
            className={`block px-4 py-2 text-sm ${
              isDark ? 'text-stone-300 hover:bg-stone-800' : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Settings
          </Link>
          <button
            onClick={toggleTheme}
            className={`flex items-center w-full px-4 py-2 text-sm ${
              isDark ? 'text-stone-300 hover:bg-stone-800' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button
            onClick={handleSignOut}
            className={`block w-full text-left px-4 py-2 text-sm ${
              isDark ? 'text-stone-300 hover:bg-stone-800' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;