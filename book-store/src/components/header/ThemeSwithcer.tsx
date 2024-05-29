import { useContext } from 'react';
import { ThemeName } from '../../style/Theme';
import { ThemeContext } from '../../context/ThemeContext';

export default function ThemeSwithcer() {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>{themeName}</button>;
}
