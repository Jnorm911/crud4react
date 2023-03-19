import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Container, Form, Button, Alert, Row, Col,
} from 'react-bootstrap';
import api from '../../../services/api';

function UpdateUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/users/${id}`);
        setUser(response.data);
      } catch (fetchError) {
        setError('Error fetching user data. Please try again.');
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/users/${id}`, user);
      setError('');
      setSuccessMessage('User successfully updated!');
    } catch (updateError) {
      setError('Error updating user data. Please try again.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Update User</h2>
          {error && (
            <Alert variant="danger" onClose={() => setError('')} dismissible>
              {error}
            </Alert>
          )}
          {successMessage && (
            <Alert variant="success" onClose={() => setSuccessMessage('')} dismissible>
              {successMessage}
            </Alert>
          )}
          {user && (
            <Form className="searchContainer" onSubmit={handleSubmit}>
              <Form.Group className="text-center">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={user.first_name}
                  onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                  style={{ display: 'block', margin: '0 auto' }}
                />
              </Form.Group>

              <Form.Group className="text-center">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  style={{ display: 'block', margin: '0 auto' }}
                />
              </Form.Group>

              <Form.Group className="text-center">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  style={{ display: 'block', margin: '0 auto' }}
                />
              </Form.Group>

              <Form.Group className="text-center">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  value={user.phone_number}
                  onChange={(e) => setUser({ ...user, phone_number: e.target.value })}
                  style={{ display: 'block', margin: '0 auto' }}
                />
              </Form.Group>

              <Form.Group className="text-center">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  value={user.gender}
                  onChange={(e) => setUser({ ...user, gender: e.target.value })}
                  style={{ display: 'block', margin: '0 auto' }}
                >
                  <option>Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="text-center">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  as="select"
                  value={user.role}
                  onChange={(e) => setUser({ ...user, role: e.target.value })}
                  style={{ display: 'block', margin: '0 auto' }}
                >
                  {/* Add the role options you need here */}
                  <option>Select role</option>
                  <option>Admin</option>
                  <option>User</option>
                </Form.Control>
              </Form.Group>

              <div className="text-center">
                <Button type="submit">Update</Button>
              </div>
            </Form>
          )}
          <br />
          <div>
            <Button variant="secondary" style={{ display: 'block', margin: '0 auto' }} onClick={handleGoBack}>Go Back</Button>
            <Link to={`/admin/delete-user/${id}`}>
              <Button variant="danger">Delete User</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default UpdateUser;
