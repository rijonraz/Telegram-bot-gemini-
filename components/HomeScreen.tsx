
import React from 'react';
import { Screen } from '../types';

interface HomeScreenProps {
  setScreen: (screen: Screen) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ setScreen }) => {
  return (
    <div className="w-full max-w-sm flex flex-col items-center space-y-6">
       <div className="text-center">
         <h2 className="text-3xl font-bold text-white">Welcome!</h2>
         <p className="text-gray-400 mt-2">Choose an option to continue.</p>
       </div>
      <button
        onClick={() => setScreen(Screen.WATCH)}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-4 rounded-xl shadow-lg transform transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300"
      >
        Watch Now
      </button>
      <button
        onClick={() => setScreen(Screen.PROFILE)}
        className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-xl shadow-lg transform transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500"
      >
        Profile
      </button>
    </div>
  );
};

export default HomeScreen;
