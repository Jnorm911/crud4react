import { Routes, Route } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Create from '../Admin/CRUD/Create/Create';
import Signup from '../Auth/Signup/Signup';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/create" element={<Create />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default AppRouter;
