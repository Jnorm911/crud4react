import { useState, useEffect } from 'react';
import {
  Table,
  FormControl,
  Alert,
  Container,
  Pagination,
  Row,
  Col,
} from 'react-bootstrap';
import api from '../../../services/api';
import './ReadUser.css';

function ReadUser() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');
        setUsers(response.data);
      } catch (fetchError) {
        setError('Error fetching users. Please try again.');
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) => `${user.first_name} ${user.last_name} ${user.email} ${user.username} ${user.phone_number} ${user.gender} ${user.role}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const items = [];
  for (let number = 1; number <= totalPages; number += 1) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div>
      <h2>Search Users</h2>
      <div className="justify-content-md-center">
        {error && (
          <Alert variant="danger" onClose={() => setError('')} dismissible>
            {error}
          </Alert>
        )}
        <Container className="searchContainer">
          <Row className="justify-content-center">
            <Col md="auto">
              <FormControl
                className="searchBar"
                type="text"
                placeholder="Search by any column"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
          </Row>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Phone Number</th>
                <th>Gender</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.gender}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="row justify-content-center">
            <Pagination className="col justify-content-center">{items}</Pagination>
          </div>
        </Container>
        <br />
      </div>
    </div>
  );
}

export default ReadUser;
