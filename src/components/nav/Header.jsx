import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../state/user';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const user = useRecoilValue(userState);

  return (
    <Navbar sticky='top' variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user.isLoggedIn && (
              <>
                {user.userData.role === 'Admin' && (
                  <Nav.Link as={Link} to="/admin">
                    Admin
                  </Nav.Link>
                )}
                <Nav.Link as={Link} to="/user">
                  My Profile
                </Nav.Link>
                <Nav.Link as={Link} to="/logout">
                  Logout
                </Nav.Link>
              </>
            )}
            {!user.isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
