import React, { useEffect, useState } from 'react';
import { Screen } from '../types';

interface WatchNowScreenProps {
  setScreen: (screen: Screen) => void;
}

const WatchNowScreen: React.FC<WatchNowScreenProps> = ({ setScreen }) => {
  const [adStatus, setAdStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    // Use a small delay to allow the loading UI to be visible
    const timer = setTimeout(() => {
      try {
        if (window.show_9836298) {
          window.show_9836298();
          setAdStatus('success');
        } else {
          console.error('Ad SDK function not found. Make sure the script is loaded correctly.');
          setAdStatus('error');
        }
      } catch (error) {
        console.error('Failed to execute ad SDK function:', error);
        setAdStatus('error');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once

  const renderContent = () => {
    switch (adStatus) {
      case 'success':
        return (
          <>
            <div className="mb-6">
              <svg className="w-16 h-16 text-cyan-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.55a2.5 2.5 0 010 4L15 18M3 8a2 2 0 012-2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path></svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Watch Ad</h2>
            <p className="text-gray-400 mb-6">
              The ad should have appeared. If not, please check your connection or ad blocker settings.
            </p>
          </>
        );
      case 'error':
        return (
          <>
             <div className="mb-6">
                <svg className="w-16 h-16 text-red-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
             </div>
            <h2 className="text-2xl font-bold mb-2 text-red-400">Ad Failed to Load</h2>
            <p className="text-gray-400 mb-6">
              We couldn't display the ad. This might be due to a network issue or an ad blocker. Please try again later.
            </p>
          </>
        );
      case 'loading':
      default:
         return (
          <>
            <div className="mb-6 animate-pulse">
               <svg className="w-16 h-16 text-gray-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.55a2.5 2.5 0 010 4L15 18M3 8a2 2 0 012-2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path></svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Loading Ad...</h2>
            <p className="text-gray-400 mb-6">
              Please wait while we prepare the advertisement.
            </p>
          </>
        );
    }
  };

  return (
    <div className="w-full max-w-sm flex flex-col items-center text-center p-4 bg-gray-800 rounded-2xl shadow-xl">
       {renderContent()}
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