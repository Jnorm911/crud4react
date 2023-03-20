import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container, Row, Col, Form, Button, Alert,
} from 'react-bootstrap';
import api from '../../../services/api';
import './CreateUser.css';

function CreateUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    phone_number: '',
    gender: '',
    role: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const refreshPage = () => {
    navigate(0);
    navigate(location.pathname);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users', formData);
      setSuccess(true);
      setError('');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        phone_number: '',
        gender: '',
        role: '',
      });
      refreshPage();
    } catch (fetchError) {
      setSuccess(false);
      setError('Error creating user. Please try again.');
    }
  };

  return (
    <Container className="create-container">
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <h2>Create User</h2>
          {success && (
            <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
              User created successfully!
            </Alert>
          )}
          {error && (
            <Alert variant="danger" onClose={() => setError('')} dismissible>
              {error}
            </Alert>
          )}
          <Form className="form-container" onSubmit={handleSubmit}>
            <Form.Group className="row justify-content-center" controlId="first_name">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="row justify-content-center" controlId="last_name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="row justify-content-center" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="row justify-content-center" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="row justify-content-center" controlId="phone_number">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="row justify-content-center" controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="row justify-content-center" controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Form.Control>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">Create User</Button>
            </div>
          </Form>
        </Col>
      </Row>
      <br />
      <br />
    </Container>
  );
}

export default CreateUser;
