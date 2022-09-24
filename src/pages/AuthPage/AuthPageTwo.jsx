import SignUpForm from "../../components/SignUpForm/SignUpForm"
import './AuthPage.css'

export default function AuthPageTwo({ setUser }) {
    return(
        <main>
            <h1 className="title">Sign Up</h1>
            <SignUpForm setUser = {setUser} />
        </main>
    )
}