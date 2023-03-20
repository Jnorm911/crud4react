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
            <Link to="/users/login" className="navLink">LOG IN</Link>
          </li>
          <li className="navItem">
            <Link to="/signup" className="navLink">SIGN UP</Link>
          </li>
          <li className="navItem">
            <Link to="/admin" className="navLink">ADMIN</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
