import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from '../Admin/CRUD/Create/Create';
import Update from '../Admin/CRUD/Update/Update';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
