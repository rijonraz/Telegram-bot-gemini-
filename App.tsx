
import React, { useState, useEffect } from 'react';
import { Screen } from './types';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import WatchNowScreen from './components/WatchNowScreen';
import ProfileScreen from './components/ProfileScreen';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>(Screen.HOME);

  useEffect(() => {
    // This is the recommended way to signal to the Telegram client that the app is ready.
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      // Set theme to match Telegram
      const colorScheme = window.Telegram.WebApp.colorScheme;
      document.documentElement.style.setProperty('--tg-theme-bg-color', window.Telegram.WebApp.themeParams.bg_color || '#18222d');
      document.documentElement.style.setProperty('--tg-theme-text-color', window.Telegram.WebApp.themeParams.text_color || '#ffffff');
      document.documentElement.style.setProperty('--tg-theme-button-color', window.Telegram.WebApp.themeParams.button_color || '#2481cc');
      document.documentElement.style.setProperty('--tg-theme-button-text-color', window.Telegram.WebApp.themeParams.button_text_color || '#ffffff');

      if (colorScheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const renderScreen = () => {
    switch (screen) {
      case Screen.WATCH:
        return <WatchNowScreen setScreen={setScreen} />;
      case Screen.PROFILE:
        return <ProfileScreen setScreen={setScreen} />;
      case Screen.HOME:
      default:
        return <HomeScreen setScreen={setScreen} />;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col antialiased">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        {renderScreen()}
      </main>
    </div>
  );
};

export default App;
