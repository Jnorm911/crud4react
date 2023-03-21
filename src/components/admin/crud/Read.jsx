import { useState, useEffect } from 'react';
import { Container, Table, InputGroup, FormControl, Pagination, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../../services/api';
import './crud.css';

const Read = ({ tableUpdate }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchData();
  }, [tableUpdate]);

  const fetchData = async () => {
    try {
      const response = await api.get('/users');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filteredData = data.filter((item) =>
    Object.values(item)
      .join(' ')
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const pagesCount = Math.ceil(filteredData.length / itemsPerPage);

  const handleChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationItems = () => {
    let items = [];
    for (let number = 1; number <= pagesCount; number++) {
      items.push(
        <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageClick(number)}>
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };

  const displayedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <Container>
      <Card className="my-4 p-4 shadow text-center cardHolder">
        <h2>Search</h2>
        <InputGroup className="mb-3">
          <FormControl placeholder="Search" value={search} onChange={handleChange} />
        </InputGroup>
      </Card>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>
                <Button as={Link} to={`/update/${item.id}`} variant="primary">
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className="justify-content-center">{renderPaginationItems()}</Pagination>
    </Container>
  );
};

Read.propTypes = {
  tableUpdate: PropTypes.bool.isRequired,
  setTableUpdate: PropTypes.func.isRequired,
};

export default Read;
