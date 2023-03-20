import { Routes, Route } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Signup from '../auth/Signup/Signup';
import AdminDashboard from '../admin/AdminDashboard';
import UpdateUser from '../admin/UpdateUser/UpdateUser';
import DeleteUser from '../admin/DeleteUser/DeleteUser';
import Success from '../../pages/Success';
import Lost from '../../pages/Lost';
import Login from '../auth/Login/Login';
import Unauthorized from '../../pages/unauthorized';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/users/:id" element={<UpdateUser />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/delete-user/:id" element={<DeleteUser />} />
      <Route path="/success" element={<Success />} />
      <Route path="/users/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route element={<Lost />} />
    </Routes>
  );
}

export default AppRouter;
