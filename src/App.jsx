import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/Router/AppRouter';
import Header from './components/nav/Header/Header';
import Footer from './components/nav/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
