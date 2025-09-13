export enum Screen {
  HOME,
  PROFILE,
}

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
}

// FIX: Add types for the Telegram Web App object to avoid TypeScript errors.
// This augments the global Window interface with the Telegram property.
interface TelegramWebApp {
  ready: () => void;
  colorScheme: 'light' | 'dark';
  themeParams: {
    bg_color?: string;
    text_color?: string;
    button_color?: string;
    button_text_color?: string;
  };
  initDataUnsafe: {
    user?: TelegramUser;
  };
}

declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
    show_9836298?: () => void;
  }
}
