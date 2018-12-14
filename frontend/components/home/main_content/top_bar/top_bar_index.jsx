import React from 'react'; 
import { Route } from 'react-router-dom';


class TopBarIndex extends React.Component {
  constructor(props) {
    super(props);
    this.userInitials = this.userInitials.bind(this)
  }

  userInitials() {
    const currentUser = this.props.currentUser;
    let initials = ""; 
    if ((!currentUser.fname) || (!currentUser.lname)) {
      initials = "ME" 
    } else {
      initials += currentUser.fname[0].toUpperCase();
      initials += currentUser.lname[0].toUpperCase(); 
    }

    return initials;
  }

  newButtonDropdown() {
    return (
      <div id="newDropdown" className="dropdown-content-new">
        <button className="new-dropdown-item">
          <svg className="dropdownMenuIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33"><path d="M7.3 32.7c-0.1 0-0.2 0-0.2-0.1 -0.2-0.1-0.3-0.3-0.3-0.4v-7.1C2.4 22.8 0 18.8 0 13.8 0 6.1 7.1 0.3 16.5 0.3S33 6.1 33 13.8c0 7.7-7.1 13.5-16.5 13.5 -0.3 0-0.6 0-0.9 0l0 0 -8 5.3C7.5 32.7 7.4 32.7 7.3 32.7zM16.5 1.3C7.7 1.3 1 6.7 1 13.8c0 3.3 1.1 7.8 6.5 10.5 0.2 0.1 0.3 0.3 0.3 0.4v6.5l7.4-4.9c0.1-0.1 0.2-0.1 0.3-0.1l0.2 0c0.3 0 0.6 0 0.9 0 8.8 0 15.5-5.4 15.5-12.5S25.3 1.3 16.5 1.3z" /></svg>
          Task
        </button>
        <button className="new-dropdown-item">
          <svg className="dropdownMenuIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33"><path d="M7.3 32.7c-0.1 0-0.2 0-0.2-0.1 -0.2-0.1-0.3-0.3-0.3-0.4v-7.1C2.4 22.8 0 18.8 0 13.8 0 6.1 7.1 0.3 16.5 0.3S33 6.1 33 13.8c0 7.7-7.1 13.5-16.5 13.5 -0.3 0-0.6 0-0.9 0l0 0 -8 5.3C7.5 32.7 7.4 32.7 7.3 32.7zM16.5 1.3C7.7 1.3 1 6.7 1 13.8c0 3.3 1.1 7.8 6.5 10.5 0.2 0.1 0.3 0.3 0.3 0.4v6.5l7.4-4.9c0.1-0.1 0.2-0.1 0.3-0.1l0.2 0c0.3 0 0.6 0 0.9 0 8.8 0 15.5-5.4 15.5-12.5S25.3 1.3 16.5 1.3z" /></svg>
          Project
        </button>
        <button className="new-dropdown-item">
          <svg className="dropdownMenuIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33"><path d="M7.3 32.7c-0.1 0-0.2 0-0.2-0.1 -0.2-0.1-0.3-0.3-0.3-0.4v-7.1C2.4 22.8 0 18.8 0 13.8 0 6.1 7.1 0.3 16.5 0.3S33 6.1 33 13.8c0 7.7-7.1 13.5-16.5 13.5 -0.3 0-0.6 0-0.9 0l0 0 -8 5.3C7.5 32.7 7.4 32.7 7.3 32.7zM16.5 1.3C7.7 1.3 1 6.7 1 13.8c0 3.3 1.1 7.8 6.5 10.5 0.2 0.1 0.3 0.3 0.3 0.4v6.5l7.4-4.9c0.1-0.1 0.2-0.1 0.3-0.1l0.2 0c0.3 0 0.6 0 0.9 0 8.8 0 15.5-5.4 15.5-12.5S25.3 1.3 16.5 1.3z" /></svg>
          Dad Joke
        </button>
      </div>
    );
  }

  handleUserIconClick() {
    document.getElementById("userDropdown").classList.toggle("show");
  }

  userIconDropdown() {
    return (
      <div id="userDropdown" className="dropdown-content-user">
        <button className="new-dropdown-item" onClick={this.props.logout}>
          <svg className="dropdownMenuIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33"><path d="M7.3 32.7c-0.1 0-0.2 0-0.2-0.1 -0.2-0.1-0.3-0.3-0.3-0.4v-7.1C2.4 22.8 0 18.8 0 13.8 0 6.1 7.1 0.3 16.5 0.3S33 6.1 33 13.8c0 7.7-7.1 13.5-16.5 13.5 -0.3 0-0.6 0-0.9 0l0 0 -8 5.3C7.5 32.7 7.4 32.7 7.3 32.7zM16.5 1.3C7.7 1.3 1 6.7 1 13.8c0 3.3 1.1 7.8 6.5 10.5 0.2 0.1 0.3 0.3 0.3 0.4v6.5l7.4-4.9c0.1-0.1 0.2-0.1 0.3-0.1l0.2 0c0.3 0 0.6 0 0.9 0 8.8 0 15.5-5.4 15.5-12.5S25.3 1.3 16.5 1.3z" /></svg>
          Log Out
        </button>

      </div>
    );
  }

  handleNewButtonClick() {
    document.getElementById("newDropdown").classList.toggle("show");
  }


  renderProjectView() {
    return (
      <div className="top-bar-project-view-container">
        <div className="med-chip-icon">
          <svg className="small-project-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.1 60.1"><path d="M57.1 51.9H16.9c-1.7 0-3-1.3-3-3s1.3-3 3-3h40.2c1.7 0 3 1.3 3 3S58.8 51.9 57.1 51.9z" /><path d="M57.1 33.1H16.9c-1.7 0-3-1.3-3-3s1.3-3 3-3h40.2c1.7 0 3 1.3 3 3C60.1 31.7 58.8 33.1 57.1 33.1z" /><path d="M57.1 14.2H16.9c-1.7 0-3-1.3-3-3s1.3-3 3-3h40.2c1.7 0 3 1.3 3 3S58.8 14.2 57.1 14.2z" /><circle cx="4" cy="11.5" r="4" /><circle cx="4" cy="30.1" r="4" /><circle cx="4" cy="48.7" r="4" /></svg>
        </div>
        <div className="top-bar-nav">
          <div className="top-bar-project-interaction">
            <span>Project Name</span>
          </div>
          <div className="top-bar-tabs">
            <div className="top-bar-tab-item">List</div>
            <div className="top-bar-tab-item">Timeline</div>
            <div className="top-bar-tab-item">Calendar</div>
            <div className="top-bar-tab-item">Conversations</div>
            <div className="top-bar-tab-item">Progress</div>
            <div className="top-bar-tab-item">Files</div>
          </div>
        </div>
      </div>
    );
  }

  renderTopBarLeft() {
    return (
      <div className="top-bar-left">
        <div className="top-bar-left-index"> 
          <Route exact path="/home" render={() => (<span>Home</span>)}/>
          <Route path="/project/:projectId" render={this.renderProjectView}/>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="top-bar-container"> 
        {this.renderTopBarLeft()}

        <div className="top-bar-right">
          
          <div className="dropdown">
            <button onClick={this.handleNewButtonClick} className="top-bar-gradient-button">+ New</button>
            {this.newButtonDropdown()}
          </div>

          <button className="top-bar-question-button">?</button>
          <button className="top-bar-upgrade-button">Upgrade</button>
          
          <div className="dropdown">
            <button onClick={this.handleUserIconClick} className="current-user-circle-button">{this.userInitials()}</button>
            {this.userIconDropdown()}
          </div>
          
          {/* <button className="top-bar-gradient-button"onClick={this.props.logout}>Log Out</button> */}
        </div>
      </div>
    ) 
  }
};

export default TopBarIndex;

