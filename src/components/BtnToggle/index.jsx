import React, { useContext } from 'react';
import './BtnToggle.css';
import ThemeContext from '../../contexts/ThemeContext';

export default function BtnToggle() {
  const { toggleTheme, isLight } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={isLight ? 'btn-toggle themeLight' : 'btn-toggle themeDark'}
      type="button"
    >
      {isLight ? 'Nuit' : 'Jour'}
    </button>
  );
}
