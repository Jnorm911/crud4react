import CreateUser from './CreateUser/CreateUser';
import ReadUser from './ReadUser/ReadUser';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <br />
      <br />
      <h1>Admin Dashboard</h1>
      <CreateUser />
      <ReadUser />
    </div>
  );
}

export default AdminDashboard;
