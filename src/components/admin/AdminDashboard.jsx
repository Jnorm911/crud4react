import { Alert } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { alertState } from '../../state/alert';
import { tableUpdateState } from '../../state/tableUpdateState';
import Create from './crud/Create';
import Read from './crud/Read';

const AdminDashboard = () => {
  const [alert, setAlert] = useRecoilState(alertState);
  const [tableUpdate, setTableUpdate] = useRecoilState(tableUpdateState);

  const handleCloseAlert = () => {
    setAlert({ ...alert, show: false });
  };

return (
  <div className="centered">
    <div className="adminDashboard">
      <h1>Admin Dashboard</h1>
      {alert.show && (
        <Alert variant="success" onClose={handleCloseAlert} dismissible>
          {alert.message}
        </Alert>
      )}
      <Create />
      <Read tableUpdate={tableUpdate} setTableUpdate={setTableUpdate} />
    </div>
  </div>
);
}

export default AdminDashboard;
