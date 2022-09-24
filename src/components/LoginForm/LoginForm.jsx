import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import "./LoginForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
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
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <>
      <Container className="border solid">
        <Form className="login-form" autoComplete="off" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formbasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="form-control mt-1"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formbasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="form-control mt-1"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Form.Group className="btn-sub" controlId="formBasicButton">
            <Button type="submit" className="btn-lg btn-block">
              LOG IN
            </Button>
          </Form.Group>
          <Button variant="link" href="/signup">
            Sign Up
          </Button>
        </Form>
      </Container>
      <p className="error-message">&nbsp;{error}</p>
    </>
  );
}
