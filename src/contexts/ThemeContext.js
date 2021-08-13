import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const themeLS = window.localStorage.getItem('theme');
  console.log({ themeLS });
  const themeInit = !themeLS || themeLS === '' ? true : JSON.parse(themeLS);
  console.log({ themeInit });
  const [theme, setTheme] = useState(themeInit);

  const toggleTheme = () => {
    setTheme(!theme);
    window.localStorage.setItem('theme', JSON.stringify(!theme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeContext;
