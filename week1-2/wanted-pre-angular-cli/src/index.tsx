import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import IssuesContextProvider from './contexts/configStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <IssuesContextProvider>
      <App />
    </IssuesContextProvider>
  </BrowserRouter>
);
