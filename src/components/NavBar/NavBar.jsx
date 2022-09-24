import * as userService from '../../utilities/users-service';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar({ user, setUser }) {
    
    function handleLogOut() {
        // Delegate to users-service
        userService.logOut()
        setUser(null)
    }
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>Gym App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home" className="link">Home</Nav.Link>
                        <Nav.Link href="/orders" className="link">QR</Nav.Link>
                        <Nav.Link href="/" onClick={handleLogOut} className="link">Log Out</Nav.Link>
                        <span>Hello, {user.name}</span>
                    </Nav>
            </Container>
        </Navbar>
    )
}