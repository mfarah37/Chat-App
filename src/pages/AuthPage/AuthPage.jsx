import LoginForm from "../../components/LoginForm/LoginForm"
import './AuthPage.css'

export default function AuthPage({ setUser }) {
    return(
        <main>
            <h1>Sign In</h1>
            <LoginForm setUser={setUser} />
        </main>
    )
}