import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';
import './assets/fonts/index.css';
import HttpAxios from './http/httpAxios';
import SickcdDataService from './service/sickcdService';
import { SickcdProvider } from './context/SickcdContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const httpClient = new HttpAxios('http://localhost:4000');
const sickcdService = new SickcdDataService(httpClient);

root.render(
  <SickcdProvider sickcdService={sickcdService}>
    <GlobalStyle />
    <App />
  </SickcdProvider>
);
