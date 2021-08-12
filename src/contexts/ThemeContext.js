import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const themeLS = window.localStorage.getItem("theme");
  console.log({themeLS});
  const themeInit = (!themeLS || themeLS === "") ? true : JSON.parse(themeLS);
  console.log({themeInit});
  const [theme, setTheme] = useState(themeInit);
   
  const toggleTheme = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", JSON.stringify(!theme));
  }
   
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
