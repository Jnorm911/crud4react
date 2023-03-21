import './App.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <AppRouter />
      </Router>     
    </RecoilRoot>
  );
}

export default App;
