import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { alertState } from '../../../state/alert';
import api from '../../../services/api';

const SignUp = () => {
  const navigate = useNavigate();
  const [, setAlert] = useRecoilState(alertState);
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '', role: 'User' });
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    try {
      await api.post('/users', { ...user, password });
      setAlert({ show: true, message: 'Account created successfully. Please log in.' }); // Set successful alert
      navigate('/login', { state: { email: user.email } }); // Pass email to login page
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <Container>
      <Card className="shadow cardHolder" style={{ maxWidth: '800px', margin: '30px auto' }}>
        <Card.Body>
          <h2>Sign Up</h2>
          <Form onSubmit={handleSignUp}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={user.first_name}
                onChange={(e) => setUser({ ...user, first_name: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={user.last_name}
                onChange={(e) => setUser({ ...user, last_name: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignUp;
