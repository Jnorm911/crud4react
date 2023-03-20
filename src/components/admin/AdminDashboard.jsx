import CreateUser from './CreateUser/CreateUser';
import ReadUser from './ReadUser/ReadUser';
import './AdminDashboard.css';
import withAuth from '../../hoc/withAuth';

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

export default withAuth(AdminDashboard);
