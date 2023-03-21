import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/homepage/HomePage';
import Login from '../components/auth/login/Login';
import LoginSuccess from '../components/auth/login/LoginSuccess';
import Logout from '../components/auth/logout/Logout';
import LogoutSuccess from '../components/auth/logout/LogoutSuccess';
import AdminDashboard from '../components/admin/AdminDashboard';
import UserProfile from '../components/user/UserProfile';
import Header from '../components/nav/Header';
import Footer from '../components/nav/Footer';
import Update from '../components/admin/crud/Update';
import Delete from '../components/admin/crud/Delete';
const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/loginsuccess" element={<LoginSuccess />} />
        <Route path="/logoutsuccess" element={<LogoutSuccess />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </>
  );
}

export default AppRouter;
