import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { ThemeContextProvider } from './contexts/ThemeContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
