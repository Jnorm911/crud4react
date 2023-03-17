import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="navList">
          <li className="navItem">
            <Link to="/" className="navLink">HOME</Link>
          </li>
          <li className="navItem">
            <Link to="/create" className="navLink">CREATE</Link>
          </li>
          <li className="navItem">
            <Link to="/update" className="navLink">UPDATE</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
