import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { alertState } from '../../../state/alert';
import api from '../../../services/api';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [, setAlert] = useRecoilState(alertState);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get(`/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert({ show: true, message: 'Passwords do not match.' });
      return;
    }

    const updatedUser = password ? { ...user, password } : user;

    try {
      await api.put(`/users/${id}`, updatedUser);
      setAlert({ show: true, message: 'User successfully updated.' });
      navigate('/admin');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <Container>
      <Card className="shadow cardHolder" style={{ maxWidth: '800px', margin: '30px auto' }}>
        <Card.Body>
          <h2>Update User</h2>
          <Form onSubmit={handleUpdate}>
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
            <Row>
              <Col>
                <Button type="submit" variant="primary">
                  Confirm
                </Button>
              </Col>
              <Col className="text-right">
                <Button as={Link} to={`/delete/${id}`} variant="danger">
                  Delete User
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Update;
