import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
    
    function handleLogOut() {
        // Delegate to users-service
        userService.logOut()
        setUser(null)
    }
    return(
        <nav>
            <div className="nav-items">
                <span className="logo">Gym App</span>
                <Link to="/home" className="link">Home</Link>
                <Link to="/orders" className="link">P2</Link>
                <Link to="" onClick={handleLogOut} className="link">Log Out</Link>
                <span>Hello, {user.name}</span>
            </div>
        </nav>
    )
}