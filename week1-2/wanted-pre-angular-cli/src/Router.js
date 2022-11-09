import { Route, Routes } from 'react-router-dom';
import Redirect from './utils/Redirect';
// page
import List from './pages/List';
import Detail from './pages/Detail';

function Router() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/:id" element={<Detail />} />
      <Route path="*" element={<Redirect />} />
    </Routes>
  );
}

export default Router;
