import { useState } from 'react';
import {
  Form, Button, Container,
} from 'react-bootstrap';
import api from '../../../../services/api';

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Add other states for each field

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      first_name: firstName,
      last_name: lastName,
      // Add other fields
    };

    try {
      const response = await api.post('/users', newUser);
      console.log(response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <Container className="signup-container">
      {/* ... */}
      <Form className="form-container" onSubmit={handleSubmit}>
        {/* ... */}
        <Form.Group controlId="formFirstName">
          <Form.Label className="form-label">First Name</Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        {/* Add other form groups */}
        <Button variant="primary" type="submit">
          Create User
        </Button>
      </Form>
    </Container>
  );
}

export default Create;
