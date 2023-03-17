import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Create from './components/Admin/CRUD/Create/Create';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Layout>
  );
}

export default App;
