import React, { useContext } from 'react';
import './BtnToggle.css';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function BtnToggle() {
  const {toggleTheme, theme} = useContext(ThemeContext);
   
  return (
    <div
      onClick={toggleTheme}
      className={theme
        ? 'btn-toggle themeLight'
        : 'btn-toggle themeDark'
      }>
      {theme ? "Nuit" : "Jour"}
    </div>
  );
};
