import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalStyles from './GlobalStyles';

const Root = () => (
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

export default Root;
