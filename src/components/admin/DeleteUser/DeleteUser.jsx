import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container, Row, Col, Button, Alert, Modal,
} from 'react-bootstrap';
import api from '../../../services/api';

function DeleteUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

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
  }, [id]);

  const handleDelete = async () => {
    try {
      await api.delete(`/users/${id}`);
      setError('');
      setShowModal(true);
    } catch (deleteError) {
      setError('Error deleting user. Please try again.');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/admin/dashboard');
  };

  return (
    <Container>
      <h2>Delete User</h2>
      {error && (
        <Alert variant="danger" onClose={() => setError('')} dismissible>
          {error}
        </Alert>
      )}
      {user && (
        <>
          <p>
            Are you sure you want to delete user
            {' '}
            <strong>
              {user.first_name}
              {' '}
              {user.last_name}
            </strong>
            ?
          </p>
          <Row className="justify-content-md-center">
            <Col xs={12} md={6} className="text-center">
              <Button variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            </Col>
          </Row>
        </>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>User Deleted</Modal.Title>
        </Modal.Header>
        <Modal.Body>User has been successfully deleted.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default DeleteUser;
