import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Todo-App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* navbar menu start first section */}
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                to="/home"
              >
                Home
              </NavLink>
              {/* <NavLink
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                to="/addItem"
              >
                Add Item
              </NavLink> */}
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                to="/myTodos"
              >
                My Todo
              </NavLink>

              {/* navbar menu end first section */}
            </Nav>
            <Nav>
              {user ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                  }
                  to="/"
                  onClick={() => signOut(auth)}
                >
                  Log Out
                </NavLink>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              )}
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                to="/register"
              >
                Register
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
