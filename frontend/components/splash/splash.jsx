import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: ""};
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
      <div className="splash-container">
        <div className="splash-top-bar-container">
          <div className="splash-logo-section">
            <Link to="/"><img src={window.blackLogoURL} id="logo-splash" /></Link>
          </div>
          <div className="splash-top-bar-links-section"> 
            <div className="splash-top-bar-link-container">
              <span className="splash-top-bar-link-text">Tour</span>
            </div>
            <div className="splash-top-bar-link-container">
              <span className="splash-top-bar-link-text">Product</span>
            </div>
            <div className="splash-top-bar-link-container">
              <span className="splash-top-bar-link-text">Pricing</span>
            </div>
            <div className="splash-top-bar-link-container">
              <Link to="/login">
                <span className="splash-top-bar-link-text">Log In</span>
              </Link>
            </div>
            <div className="splash-top-bar-link-container">
              <Link to="/login"> 
                <button className="splash-try-button"><span>Try for free</span></button>
              </Link>
            </div>
          </div> 
        </div>
        <div className="splash-main-container">
            <h1>Make more time for the work that matters most</h1>
            <h2>Thesana is the work management platform teams use to stay focused on the goals, projects, and daily tasks that grow your business.</h2>
            <div id="splash-email-form">
              <input className="splash-email-input" type="text" placeholder="name@company.com" value={this.state.email} onChange={this.handleChange("email")}></input>
              <button id="splash-get-started-button">Get Started</button>
            </div>
        </div>
      </div>
    )
  }
};

export default Splash;
