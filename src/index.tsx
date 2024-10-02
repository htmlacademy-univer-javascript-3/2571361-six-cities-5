import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const numPlaces = 312;

root.render(
  <React.StrictMode>
    <App numPlaces={numPlaces} />
  </React.StrictMode>
);
