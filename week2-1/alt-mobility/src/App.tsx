import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Error from './pages/Error';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
