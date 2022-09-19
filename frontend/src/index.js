import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import "leaflet/dist/leaflet.css"
import App from './App';
import { store } from './app/store';
import { Provider } from "react-redux";
import {RecoilRoot} from 'recoil'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <RecoilRoot>
        <App />
        </RecoilRoot>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


