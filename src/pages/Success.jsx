import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/'); // Navigate to the home page
  };
  return (
    <Container>
      <div className="space">
        <br />
      </div>
      <Row>
        <Col>
          <h1>Success!</h1>
          <p>Your action has been completed.</p>
        </Col>
        <Col>
          <div>
            {/* Your success message and other components */}
            <Button variant="primary" onClick={goBack}>Go Back</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Success;
