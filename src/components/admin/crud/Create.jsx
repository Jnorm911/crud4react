import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { alertState } from '../../../state/alert';
import { tableUpdateState } from '../../../state/tableUpdateState';
import api from '../../../services/api';

const Create = () => {
  const navigate = useNavigate();
  const [, setAlert] = useRecoilState(alertState);
  const [, setTableUpdate] = useRecoilState(tableUpdateState); // Add this line
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '', role: 'User' });
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreate = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert({ show: true, message: 'Passwords do not match.' });
      return;
    }
    try {
      await api.post('/users', { ...user, password });
      setUser({ first_name: '', last_name: '', email: '', role: 'User' });
      setPassword('');
      setConfirmPassword('');
      setAlert({ show: true, message: 'User successfully created.' });
      setTableUpdate((prevState) => !prevState); // Toggle the tableUpdateState
      navigate('/admin');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <Container>
      <Card className="shadow cardHolder" style={{ maxWidth: '800px', margin: '30px auto' }}>
        <Card.Body>
          <h2>Create User</h2>
          <Form onSubmit={handleCreate}>
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
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
              >
                <option>User</option>
                <option>Admin</option>
              </Form.Control>
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
              Confirm
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Create;
