import { Routes, Route } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Signup from '../auth/Signup/Signup';
import AdminDashboard from '../admin/AdminDashboard';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default AppRouter;
