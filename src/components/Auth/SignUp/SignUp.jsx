import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Form, Button, Row, Col, Alert,
} from 'react-bootstrap';
import api from '../../../services/api'; // Update the path to your api.js file
import './Signup.css';

function Signup() {
  const [otherGender, setOtherGender] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    phone_number: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleGenderChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, gender: value });

    if (value !== 'custom') {
      setOtherGender('');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await api.post('/users', {
        first_name: formData.first_name,
        last_name: formData.last_name,
        username: formData.username,
        phone_number: formData.phone_number,
        gender: formData.gender,
        email: formData.email,
        password: formData.password,
        role: 'User', // Automatically assign the role "user"
      });

      navigate('/success');
    } catch (accountError) {
      setError('An error occurred while creating your account. Please try again.');
    }
  };

  return (
    <Container className="signup-container">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <br />
          <br />
          <h1 className="text-center mb-4">Sign Up</h1>
          {error && (
            <Alert variant="warning">
              {error}
            </Alert>
          )}
          <Form className="form-container" onSubmit={handleSubmit}>
            <Form.Group className="row justify-content-center " controlId="formFirstName">
              <Form.Label className="form-label">First Name</Form.Label>
              <br />
              <Form.Control
                className="inputBox"
                type="text"
                name="first_name"
                pattern="^[^\d!@#$%^&*(),.?:{}|<>0-9()]*$"
                maxLength={26}
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
              />
            </Form.Group>

            <Form.Group className="row justify-content-center " controlId="formLastName">
              <Form.Label className="form-label">Last Name</Form.Label>
              <br />
              <Form.Control
                className="inputBox"
                type="text"
                name="last_name"
                pattern="^[^\d!@#$%^&*(),.?:{}|<>0-9]*$"
                maxLength={26}
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </Form.Group>

            <Form.Group className="row justify-content-center " controlId="formUsername">
              <Form.Label className="form-label">Username</Form.Label>
              <br />
              <Form.Control
                className="inputBox"
                type="text"
                name="username"
                pattern="^[a-zA-Z0-9._-]{3,26}$"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
              />
            </Form.Group>

            <Form.Group className="row justify-content-center " controlId="formPhoneNumber">
              <Form.Label className="form-label">Phone Number</Form.Label>
              <br />
              <Form.Control
                className="inputBox"
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </Form.Group>

            <Form.Group className="row justify-content-center " controlId="formGender">
              <Form.Label className="form-label">Gender</Form.Label>
              <br />
              <Form.Control
                className="inputBox"
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleGenderChange}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
              {formData.gender === 'Other' && (
                <Form.Control
                  className="inputBox mt-2"
                  type="text"
                  name="otherGender"
                  pattern="^[^\d!@#$%^&*(),.?:{}|<>0-9()]*$"
                  value={otherGender}
                  onChange={(e) => setOtherGender(e.target.value)}
                  placeholder="Enter Gender"
                />
              )}
            </Form.Group>

            <Form.Group className="row justify-content-center" controlId="formBasicEmail">
              <Form.Label className="form-label">Email address</Form.Label>
              <br />
              <Form.Control
                className="inputBox"
                type="email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="row justify-content-center " controlId="formBasicPassword">
              <Form.Label className="form-label">Password</Form.Label>
              <br />
              <Form.Control
                className="inputBox"
                type="password"
                name="password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="row justify-content-center " controlId="formBasicConfirmPassword">
              <Form.Label className="form-label">Confirm Password</Form.Label>
              <Form.Control
                className="inputBox"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">Sign Up</Button>
            </div>
            <br />
            <Form.Text className="text-muted">We&apos;ll never share your email with anyone else.</Form.Text>
          </Form>
        </Col>
      </Row>
      <br />
      <br />
    </Container>
  );
}

export default Signup;
