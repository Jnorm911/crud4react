import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LogoutSuccess = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="centered">
      <div>
        <h1>Logout Successful!</h1>
        <p>You have been logged out.</p>
        <Button variant="primary" onClick={handleBackToHome}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default LogoutSuccess;
