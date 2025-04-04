import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-center items-center">
          <p className="text-sm text-gray-600">
            © {currentYear} MOUSA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;