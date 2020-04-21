import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { useAlert } from "react-alert";
import axios from "axios";
import setAuthToken from "./setAuthToken";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
    };
    this.register = this.register.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  register(user) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios.post("http://localhost:5000/api/users", user, config).then((res) => {
      this.setState({ token: res.data, isAuthenticated: true });
      setAuthToken(this.state.token);
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    if (this.state.password !== this.state.password2) {
      console.log("Passwords does not match");
    }
    this.register(user);
    this.props.history.push("/");
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <h1 className="large text-primary">Sign Up</h1>
          <p className="lead">
            <i className="fas fa-user" /> Create Your Account
          </p>
          <form className="form" onSubmit={(e) => this.onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={(e) => this.onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={this.state.email}
                onChange={(e) => this.onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={(e) => this.onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={this.state.password2}
                onChange={(e) => this.onChange(e)}
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Register" />
          </form>
          <p className="my-1">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Register;
