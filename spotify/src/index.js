import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import './index.css';
import App from './App';
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './Reducer';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root

root.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>
);
