import React, { createContext, useEffect, useState } from 'react';
import { ThemeName, getTheme } from '../style/Theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../style/Global';

interface State {
  themeName: ThemeName;
  toggleTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const state: State = {
  themeName: 'light',
  toggleTheme: () => {},
};

export const ThemeContext = createContext<State>(state);

const DEFAULT_TEHEMA_NAME = 'light';
const THEME_LOCALSTOREGE_KEY = 'book_store_theme';
export const BookStoreThemeProvider = ({ children }: Props) => {
  const [themeName, setThemeName] = useState<ThemeName>(DEFAULT_TEHEMA_NAME);

  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_LOCALSTOREGE_KEY) as ThemeName;
    setThemeName(localTheme || DEFAULT_TEHEMA_NAME);
  }, []);

  const toggleTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
    localStorage.setItem(THEME_LOCALSTOREGE_KEY, themeName === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
