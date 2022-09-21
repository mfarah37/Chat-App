import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm"
import './AuthPage.css'

export default function AuthPage({ setUser }) {
    return(
        <main>
            <h1>Sign In</h1>
            <LoginForm setUser={setUser} />
            <Link to="/signup" className="">Sign Up</Link>
        </main>
    )
}