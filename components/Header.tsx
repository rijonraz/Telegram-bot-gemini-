
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gray-800/50 backdrop-blur-sm p-4 text-center shadow-lg sticky top-0 z-10">
      <h1 className="text-xl font-bold tracking-wider text-cyan-400">
        Coded by Gemini
      </h1>
    </header>
  );
};

export default Header;
