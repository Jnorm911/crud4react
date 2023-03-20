import axios from 'axios';

const api = axios.create({
  baseURL: 'https://640d3b9c1a18a5db83732507.mockapi.io/api/v1',
});

export default api;
