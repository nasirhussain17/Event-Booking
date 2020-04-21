import React, { Component, Fragment } from "react";
import axios from "axios";
import { Link, Redirect, withRouter } from "react-router-dom";
import setAuthToken from "./setAuthToken";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isAuthenticated: false,
      token: "",
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(user) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios.post("http://localhost:5000/api/auth", user, config).then((res) => {
      this.setState({ token: res.data, isAuthenticated: true });
      setAuthToken(this.state.token);
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
    };
    this.login(user);
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <h3>Login</h3>
          <form className="form" onSubmit={(e) => this.onSubmit(e)}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={this.email}
                onChange={(e) => this.onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.password}
                onChange={(e) => this.onChange(e)}
                minLength="6"
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
          </form>
          <p className="my-1">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Login;
