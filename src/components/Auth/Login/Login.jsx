import { useState, useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../../state/user';
import { alertState } from '../../../state/alert'; // Import alertState
import { Form, Button, Container, Card, Alert } from 'react-bootstrap'; // Add Container, Card, and Alert imports
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../../../services/api';

const Login = () => {
  const location = useLocation();
  const setUser = useSetRecoilState(userState);
  const alert = useRecoilValue(alertState); // Get the alert state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email); // Autofill email from state
    }
  }, [location]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get('/users');
      const users = response.data;

      // Find the user with the given email
      const user = users.find((user) => user.email === email);

      // Check if the user exists and if the password matches
      if (user && user.password === password) {
        setUser({
          isLoggedIn: true,
          userData: {
            email: user.email,
            role: user.role, // Assuming the role is returned as part of the user data
          },
        });
        navigate('/loginsuccess');
      } else {
        console.error('Invalid email or password');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Card className="shadow cardHolder" style={{ maxWidth: '800px', margin: '30px auto' }}>
        <Card.Body>
          <h2>Login</h2>
          {alert.show && (
            <Alert variant="success">
              {alert.message}
            </Alert>
          )}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;





