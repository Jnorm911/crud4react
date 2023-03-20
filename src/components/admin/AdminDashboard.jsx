import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import CreateUser from './CreateUser/CreateUser';
import ReadUser from './ReadUser/ReadUser';
import './AdminDashboard.css';

function AdminDashboard() {
  const [successMessage, setSuccessMessage] = useState('');

  return (
    <div className="admin-dashboard">
      {successMessage && (
        <Alert variant="success" onClose={() => setSuccessMessage('')} dismissible>
          {successMessage}
        </Alert>
      )}
      <br />
      <br />
      <h1>Admin Dashboard</h1>
      <CreateUser />
      <ReadUser />
    </div>
  );
}

export default AdminDashboard;
