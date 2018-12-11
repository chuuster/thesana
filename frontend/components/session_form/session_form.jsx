import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.processForm(this.state);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors() {
    return ( 
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
      <h1>{(this.props.formType === "login") ? "Login" : "Sign Up"}</h1>
      <h2>{(this.props.formType === "login") ? <Link to="/signup">Sign Up</Link> : <Link to="/login">Login</Link>}</h2>
      {this.renderErrors()}
      <form onSubmit={this.handleSubmit}>
        <label>Email: 
          <input type="text" value={this.state.email} onChange={this.handleChange("email")}/>
        </label>
        <label>Password: 
          <input type="password" value={this.state.password} onChange={this.handleChange("password")}/>
        </label>
        <input type="submit" value={this.props.formType}/>
      </form>
      </>
    )
  }
}

export default SessionForm;