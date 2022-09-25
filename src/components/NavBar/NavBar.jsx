import * as userService from "../../utilities/users-service";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to users-service
    userService.logOut();
    setUser(null);
  }
  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand>Gym App</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/home">
              Home
            </Nav.Link>
            <Nav.Link href="/qr_scan">
              QR
            </Nav.Link>
            <Nav.Link href="/settings">
              Settings
            </Nav.Link>
            <Nav.Link href="/" onClick={handleLogOut} className="link">
              Log Out
            </Nav.Link>
            <span>Hello, {user.name}</span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
