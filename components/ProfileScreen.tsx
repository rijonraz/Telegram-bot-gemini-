
import React, { useState, useEffect } from 'react';
import { Screen, TelegramUser } from '../types';

interface ProfileScreenProps {
  setScreen: (screen: Screen) => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ setScreen }) => {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    try {
      if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
        const userData = window.Telegram.WebApp.initDataUnsafe.user;
        if (userData && userData.id) {
           setUser(userData);
        } else {
            setError("Could not retrieve user data from Telegram.");
        }
      } else {
        setError("This app must be run inside Telegram to display profile data.");
        // For testing in browser
        setUser({ id: 12345, first_name: 'Test', last_name: 'User', username: 'testuser' });
      }
    } catch (e) {
      setError("An error occurred while fetching user data.");
      console.error(e);
    }
  }, []);

  return (
    <div className="w-full max-w-sm flex flex-col items-center p-6 bg-gray-800 rounded-2xl shadow-xl">
      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center mb-4 ring-4 ring-gray-700">
        <span className="text-4xl font-bold text-white">
          {user ? user.first_name.charAt(0) : '?'}
        </span>
      </div>
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      
      {error && !user && <p className="text-red-400 text-center">{error}</p>}
      
      {user && (
        <div className="w-full text-left space-y-3">
            <div className="bg-gray-700/50 p-3 rounded-lg">
                <p className="text-sm text-gray-400">First Name</p>
                <p className="text-lg font-medium">{user.first_name}</p>
            </div>
            {user.last_name && (
                 <div className="bg-gray-700/50 p-3 rounded-lg">
                    <p className="text-sm text-gray-400">Last Name</p>
                    <p className="text-lg font-medium">{user.last_name}</p>
                </div>
            )}
            {user.username && (
                 <div className="bg-gray-700/50 p-3 rounded-lg">
                    <p className="text-sm text-gray-400">Username</p>
                    <p className="text-lg font-medium">@{user.username}</p>
                </div>
            )}
             <div className="bg-gray-700/50 p-3 rounded-lg">
                <p className="text-sm text-gray-400">Telegram ID</p>
                <p className="text-lg font-medium">{user.id}</p>
            </div>
        </div>
      )}

      <button
        onClick={() => setScreen(Screen.HOME)}
        className="mt-8 w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-400"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ProfileScreen;
