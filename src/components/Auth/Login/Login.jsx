import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../../state/user';
import api from '../../../services/api';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const setUser = useSetRecoilState(userState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
  );
};

export default Login;
