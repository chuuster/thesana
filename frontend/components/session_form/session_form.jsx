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
    this.demoUserLogin = this.demoUserLogin.bind(this);
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
    if (this.props.errors.length !== 0) {
      return ( 
        <div className="errors-session">
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  renderOtherLink() {
    if (this.props.formType === "Log In") {
      return (
        <div id="session-alternate-link">
          <span>Don't have an account?  </span> 
          <Link to="/signup"> 
            <button className="transparent-button"> Sign Up</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div id="session-alternate-link">
          <span>Have an account?  </span> 
          <Link to="/login">
            <button className="transparent-button"> Log In</button>
          </Link>
        </div>
      );
    }
  }

  renderSubmitButton() {
    if (this.props.formType === "Log In") {
      return (
        <div className="session-form-button-section">
          <input type="submit" className="blue-button" value={this.props.formType} />
          <br /> <span>or</span> <br />
          {(this.props.formType === "Log In") ? <button onClick={this.demoUserLogin} className="blue-button">Log In As Demo User</button> : ""}
        </div>
      );
    } else {
      return (
        <div className="session-form-button-section">
          <input type="submit" className="blue-button" value={this.props.formType} />
        </div>
      );
    }
  }

  demoUserLogin() {
    this.props.processForm({email: "mscott@example.com", password: "password"})
  }

  render() {
    return (
      <div className="session-container">
        <Link to="/"><img src="./assets/logo_white.png" className="logo-session"></img></Link><br /><br />
        <form onSubmit={this.handleSubmit} className="session-form">
          <h1 className="session-form-header">{this.props.formType}</h1>
          
          <div className="session-inner-form">
            {this.renderErrors()}
            <label className="session-form-label">Email Address:</label> <br/>
            <input 
              type="text" 
              value={this.state.email} 
              onChange={this.handleChange("email")} 
              className="session-form-input"
            /><br /><br />
            <label className="session-form-label">Password:</label> <br />
            <input 
              type="password" 
              value={this.state.password} 
              onChange={this.handleChange("password")} 
              className="session-form-input" 
            /><br /><br /><br />
            
            {this.renderSubmitButton()}
          </div>

        </form>

        {this.renderOtherLink()}
      </div>
    )
  }
}

export default SessionForm;