import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import { colors } from './theme';

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  list-style: none;
  border: none;
  text-decoration: none;
  box-sizing: border-box;
  transition: 0.3s;
  &:focus {
    outline: none
  }

  &::-webkit-scrollbar {
    width: 2px;
  }


  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.frenchGray};
    border-radius: 4px;
   
  }
};
body {
  background-color: ${colors.ebony};
  color: ${colors.main};
}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
