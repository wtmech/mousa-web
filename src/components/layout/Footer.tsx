import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {currentYear} MOUSA. All rights reserved.
          </p>
          <a
            href="https://trello.com/b/CYs0Eskp/mousa-board"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900 mt-2 md:mt-0"
          >
            View Roadmap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;