import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import CreateUser from './CreateUser/CreateUser';
import ReadUser from './ReadUser/ReadUser';
import DeleteUser from './DeleteUser/DeleteUser';
import './AdminDashboard.css';

function AdminDashboard() {
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserDeleted = () => {
    setSuccessMessage('User has been successfully deleted.');
    setSelectedUser(null);
  };

  const handleUserSelection = (user) => {
    setSelectedUser(user);
  };

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
      <ReadUser onUserSelected={handleUserSelection} />
      {selectedUser && (
        <DeleteUser user={selectedUser} onUserDeleted={handleUserDeleted} />
      )}
      {/* Other components like UpdateUser */}
    </div>
  );
}

export default AdminDashboard;
