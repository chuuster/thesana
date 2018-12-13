import React from 'react';

class TopBarIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  
  
  render() {
    return (
      <div className="top-bar-container"> 
        <ul>
          <li>Hi! You are logged in.</li>
          <li><button onClick={this.props.logout}>Log Out</button></li>
        </ul>
      </div>
    ) 
  }
};

export default TopBarIndex;