import { Link } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import './AuthPage.css'

export default function AuthPageTwo({ setUser }) {
    return(
        <main>
            <h1>Sign Up</h1>
            <SignUpForm setUser = {setUser} />
            <Link to="/" className="">Sign In</Link>
        </main>
    )
}