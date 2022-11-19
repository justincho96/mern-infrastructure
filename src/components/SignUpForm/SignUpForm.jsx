import { Component } from "react";
import { signUp } from "../../utilities/users-service";

export default class SignUpForm extends Component {
  // state for SignUpForm
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    // prevent page from reloading
    evt.preventDefault();
    try {
      // we don't need to send 'error' or 'confirm' properties in state
      // make copy of state object with only necessary fields
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;

      // Promise returned by signUp service method
      // will resolve to the user object included in
      // payload of JSON Web Token (JWT)
      const user = await signUp(formData);
      console.log(user);

      // without delete keyword
      // const formData = {
      //   name: this.state.name,
      //   email: this.state.email,
      //   password: this.state.password,
      // };
    } catch {
      // an error occured
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="false" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <button type="submit" disabled={disable}>
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
