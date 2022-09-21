import { Component } from "react";
import { signUp } from '../../utilities/users-service';
import { Link } from "react-router-dom";
import './SignUpForm.css'

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  }
  // The object passed to setState is merged with the current state object
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    })
  }
  handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      //Destructing State
      const { name, email, password } = this.state
      const formData = { name, email, password }
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
      this.props.setUser(user)
    } catch (err) {
      // Console log error
      console.log(err)
      //Incase of error
      this.setState({ error: 'Sign Up - Try Again' })
    }
  }
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="Auth-form-container2">
        <form autoComplete="off" onSubmit={this.handleSubmit} className="form-bg">
          <div className="Auth-form-content2">
            <div className="Auth-form-title">Sign Up</div>
            <div className="form-group mt-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                className="form-control mt-1"
                required
              />
              </div>
              <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                className="form-control mt-1"
                required
              />
              </div>
              <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                className="form-control mt-1"
                required
              />
              </div>
              <div className="form-group mt-3">
              <label>Confirm</label>
              <input
                type="password"
                name="confirm"
                value={this.state.confirm}
                onChange={this.handleChange}
                className="form-control mt-1"
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" disabled={disable}>SIGN UP</button>
            </div>
            <Link to="/" className="">Sign In</Link>
          </div>
        </form>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}