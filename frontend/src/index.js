import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom"; // Changed to HashRouter for GitHub Pages
import './index.css';
import "leaflet/dist/leaflet.css"
import App from './App';
import { store } from './app/store';
import { Provider } from "react-redux";
import {RecoilRoot} from 'recoil'

// Error handling for React 18
const rootElement = document.getElementById('root');
if (!rootElement) {
  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  document.body.appendChild(rootDiv);
}

try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <HashRouter>
      <Provider store={store}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </Provider>
    </HashRouter>
  );
} catch (error) {
  console.error("Error rendering application:", error);
  const errorElement = document.getElementById('root');
  if (errorElement) {
    errorElement.innerHTML = '<h1>Application Error</h1><p>Please refresh or try again later.</p>';
  }
}

