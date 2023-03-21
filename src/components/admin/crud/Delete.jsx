import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { alertState } from '../../../state/alert';
import api from '../../../services/api';

const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [,setAlert] = useRecoilState(alertState);

  const handleDelete = async () => {
    try {
      await api.delete(`/users/${id}`);
      setAlert({ show: true, message: 'User successfully deleted.' });
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Container>
      <Card className="shadow cardHolder" style={{ maxWidth: '800px', margin: '30px auto' }}>
        <Card.Body>
          <h2>Confirm Deletion</h2>
          <p>Are you sure you want to delete this user?</p>
          <Row>
            <Col>
              <Button variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            </Col>
            <Col className="text-right">
              <Button variant="secondary" onClick={() => navigate('/admin')}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Delete;
