import React from 'react';
import ReactDOM from 'react-dom/client';
import PercussionBox from './PercussionBox';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PercussionBox />
  </React.StrictMode>
);

reportWebVitals();
