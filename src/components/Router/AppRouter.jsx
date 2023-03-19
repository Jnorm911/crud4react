import { Routes, Route } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Signup from '../auth/Signup/Signup';
import AdminDashboard from '../admin/AdminDashboard';
import UpdateUser from '../admin/UpdateUser/UpdateUser';
import DeleteUser from '../admin/DeleteUser/DeleteUser';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/users/:id" element={<UpdateUser />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/delete-user/:id" element={<DeleteUser />} />
    </Routes>
  );
}

export default AppRouter;
