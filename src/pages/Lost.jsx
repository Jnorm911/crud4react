import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Lost() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Navigate back in browsing history
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </Col>
        <Col><Button variant="primary" onClick={goBack}>Go Back</Button></Col>
      </Row>
    </Container>
  );
}

export default Lost;
