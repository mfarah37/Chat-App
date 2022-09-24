import { Component } from "react";
import { signUp } from "../../utilities/users-service";
import { Link } from "react-router-dom";
import "./SignUpForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };
  // The object passed to setState is merged with the current state object
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };
  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      //Destructing State
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      //Object literal
      // const formData = {
      //   name: this.state.name,
      //   emai: this.state.email,
      //   password: this.state.password
      // }
      //Using Spread operator & delete keyword
      // const formData = {...this.state}
      // delete formData.error
      // delete formData.confirm
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Baby step!
      this.props.setUser(user);
    } catch (err) {
      // Console log error
      console.log(err);
      //Incase of error
      this.setState({ error: "Sign Up - Try Again" });
    }
  };
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
        <Container className="border solid">
          <Form
            className="signup-form"
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Name"
                className="form-control mt-1"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
                className="form-control mt-1"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Passowrd"
                className="form-control mt-1"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm</Form.Label>
              <Form.Control
                type="password"
                name="confirm"
                value={this.state.confirm}
                onChange={this.handleChange}
                placeholder="Confirm Password"
                className="form-control mt-1"
                required
              />
            </Form.Group>
            <Form.Group className="btn-sub" controlId="formBasicButton">
              <Button type="submit" disabled={disable}>
                SIGN UP
              </Button>
            </Form.Group>
            <Link to="/" className="">
              Sign In
            </Link>
          </Form>
        </Container>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </>
    );
  }
}
