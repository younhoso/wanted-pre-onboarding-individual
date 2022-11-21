import { Route, Routes } from 'react-router-dom';

// page
import List from './pages/List';
import Detail from './pages/Detail';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
}

export default Router;
