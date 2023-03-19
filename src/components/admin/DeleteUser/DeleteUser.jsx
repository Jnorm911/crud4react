import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Row, Col, Button, Alert,
} from 'react-bootstrap';
import api from '../../../services/api';

function DeleteUser({ user, onUserDeleted }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleDelete = async () => {
    try {
      await api.delete(`/users/${user.id}`);
      setError('');
      onUserDeleted(); // Call the passed down function from AdminDashboard
      navigate('/admin/dashboard'); // Redirect to the AdminDashboard page after deletion
    } catch (deleteError) {
      setError('Error deleting user. Please try again.');
    }
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
    </Container>
  );
}

DeleteUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
  }).isRequired,
  onUserDeleted: PropTypes.func.isRequired,
};

export default DeleteUser;
