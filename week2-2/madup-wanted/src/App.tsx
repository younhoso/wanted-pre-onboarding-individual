// @typescript-eslint/no-unused-vars
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AdManagement from './pages/AdManagement';
import Error from './pages/Error';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/AdManagement" element={<AdManagement />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
}

export default App;
