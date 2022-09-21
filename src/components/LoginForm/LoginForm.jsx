import { useState } from 'react';
import { Link } from "react-router-dom";
import * as usersService from '../../utilities/users-service';
import './LoginForm.css'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className="Auth-form-container">
      <form autoComplete="off" onSubmit={handleSubmit} className="form-bg">
        <div className="Auth-form-content">
          <div className="Auth-form-title">Sign In</div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="form-control mt-1"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="form-control mt-1"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">LOG IN</button>
          </div>
          <Link to="/signup" className="su-link">Sign Up</Link>
        </div>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}