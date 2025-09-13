import React, { useEffect, useState } from 'react';
import { Screen } from '../types';

interface WatchNowScreenProps {
  setScreen: (screen: Screen) => void;
}

const WatchNowScreen: React.FC<WatchNowScreenProps> = ({ setScreen }) => {
  const [adError, setAdError] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window.show_9836298 === 'function') {
      try {
        window.show_9836298();
      } catch (error) {
        console.error("Ad SDK error:", error);
        setAdError(true);
      }
    } else {
      console.warn("Ad SDK function not found. The ad script might be blocked or failed to load.");
      setAdError(true);
    }
  }, []);

  return (
    <div className="w-full max-w-sm flex flex-col items-center text-center p-4 bg-gray-800 rounded-2xl shadow-xl">
        <div className="mb-6">
            <svg className={`w-16 h-16 text-cyan-400 mx-auto ${!adError ? 'animate-pulse' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.55a2.5 2.5 0 010 4L15 18M3 8a2 2 0 012-2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path></svg>
        </div>
        <h2 className="text-2xl font-bold mb-2">
          {adError ? 'Ad Unavailable' : 'Loading Ad...'}
        </h2>
        <p className="text-gray-400 mb-6">
            {adError 
              ? 'Sorry, there was a problem loading the ad. Please try again later.' 
              : 'Please wait while we prepare your content.'}
        </p>
       <button
        onClick={() => setScreen(Screen.HOME)}
        className="mt-8 w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-400"
       >
        Back to Home
      </button>
    </div>
  );
};

export default WatchNowScreen;