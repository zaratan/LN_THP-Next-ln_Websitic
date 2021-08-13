import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const LS_THEME_KEY = 'ThemeContext:isLight';

export const ThemeContextProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const isLightLS = JSON.parse(window.localStorage.getItem(LS_THEME_KEY));

    if (isLightLS !== undefined && isLightLS !== null && isLightLS !== '') {
      setIsLight(isLightLS);
    }
  }, []);

  useEffect(() => {
    document
      .getElementsByTagName('body')[0]
      .setAttribute('class', isLight ? 'light-theme' : 'dark-theme');
  }, [isLight]);

  const toggleTheme = () => {
    const newIsLight = !isLight;
    setIsLight(newIsLight);
    window.localStorage.setItem('theme', JSON.stringify(newIsLight));
  };

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeContext;
