import { useSetRecoilState } from 'recoil';
import { userState } from '../../../state/user';
import { alertState } from '../../../state/alert';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();
  const setAlert = useSetRecoilState(alertState);

  const handleLogout = () => {
    setUser({ isLoggedIn: false, userData: null });
    setAlert({ show: false, message: '' });
    navigate('/logoutsuccess');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Are you sure you want to log out?</h1>
      <Button variant="danger" onClick={handleLogout}>
        Log Out
      </Button>
      <Button variant="secondary" onClick={handleCancel} style={{ marginLeft: '10px' }}>
        Cancel
      </Button>
    </div>
  );
};

export default Logout;
