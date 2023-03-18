import './Signup.css';
import {
  Container, Form, Button, Row, Col,
} from 'react-bootstrap';

function Signup() {
  return (
    <Container className="signup-container">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1 className="text-center mb-4">Sign Up</h1>
          <Form className="form-container">
            <Form.Group controlId="formFirstName">
              <Form.Label className="form-label">First Name</Form.Label>
              <br />
              <Form.Control className="form-control" type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label className="form-label">Last Name</Form.Label>
              <br />
              <Form.Control className="form-control" type="text" placeholder="Last Name" />
            </Form.Group>

            <Form.Group controlId="formUsername">
              <Form.Label className="form-label">Username</Form.Label>
              <br />
              <Form.Control className="form-control" type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
              <Form.Label className="form-label">Phone Number</Form.Label>
              <br />
              <Form.Control className="form-control" type="tel" placeholder="Phone Number" />
            </Form.Group>

            <Form.Group controlId="formGender">
              <Form.Label className="form-label">Gender</Form.Label>
              <br />
              <Form.Control className="form-control gender-select" as="select">
                <option>Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="form-label">Email address</Form.Label>
              <br />
              <Form.Control className="form-control" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="form-label">Password</Form.Label>
              <br />
              <Form.Control className="form-control" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label className="form-label">Confirm Password</Form.Label>
              <Form.Control className="form-control" type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>
            <br />
            <Form.Text className="text-muted">We&apos;ll never share your email with anyone else.</Form.Text>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
