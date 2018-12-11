import React from 'react';
import { Link } from 'react-router-dom';

// const Greeting = (props) => {


// };

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  loggedInRender() {
    return (
      <ul>
        <li>Hi {this.props.currentUser.fname}!</li>
        <li><button onClick={this.props.logout}>Log Out</button></li>
      </ul>
    );
  }

  loggedOutRender() {
    return (
      <ul>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    );
  }

  render() {
    return (
      (this.props.currentUser === undefined) ? this.loggedOutRender() : this.loggedInRender()
    );
  }
};

export default Greeting;