import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyle';
import TodosContextProvider from './store/TodoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <TodosContextProvider>
      <GlobalStyles />
      <App />
    </TodosContextProvider>
  </BrowserRouter>
);
