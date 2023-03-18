import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AppRouter from './components/Router/AppRouter';

function App() {
  return (
    <Router>
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  );
}

export default App;
