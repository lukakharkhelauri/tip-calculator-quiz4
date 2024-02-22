import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './app';
import classes from './index.css?inline';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);