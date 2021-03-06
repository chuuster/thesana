import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import { CREATE_PROJECT } from "../../../modal/modal"


class TopBarIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderProjectView = this.renderProjectView.bind(this);
    this.renderTopBarLeft = this.renderTopBarLeft.bind(this);
  }
  
  handleIncompleteDisplay() {
    Array.from(document.getElementsByClassName("incomplete-task")).forEach((el) => { el.classList.remove("task-hide"); });
    Array.from(document.getElementsByClassName("completed-task")).forEach((el) => { el.classList.add("task-hide"); });
    document.getElementById("top-bar-incomplete").classList.add("active-tab"); 
    document.getElementById("top-bar-complete").classList.remove("active-tab"); 
    document.getElementById("top-bar-all").classList.remove("active-tab"); 
  }
  
  handleCompleteDisplay() {
    Array.from(document.getElementsByClassName("incomplete-task")).forEach((el) => { el.classList.add("task-hide"); });
    Array.from(document.getElementsByClassName("completed-task")).forEach((el) => { el.classList.remove("success"); });
    Array.from(document.getElementsByClassName("completed-task")).forEach((el) => { el.classList.remove("task-hide"); });
    document.getElementById("top-bar-complete").classList.add("active-tab"); 
    document.getElementById("top-bar-incomplete").classList.remove("active-tab");
    document.getElementById("top-bar-all").classList.remove("active-tab"); 
  }
  
  handleAllDisplay() {
    Array.from(document.getElementsByClassName("completed-task")).forEach((el) => { el.classList.remove("success"); });
    Array.from(document.getElementsByClassName("completed-task")).forEach((el) => { el.classList.remove("task-hide"); });
    Array.from(document.getElementsByClassName("incomplete-task")).forEach((el) => { el.classList.remove("task-hide"); });
    document.getElementById("top-bar-all").classList.add("active-tab"); 
    document.getElementById("top-bar-complete").classList.remove("active-tab");
    document.getElementById("top-bar-incomplete").classList.remove("active-tab"); 
  }
  
  //////////   Dropdown Sections //////////  

  newButtonDropdown() {
    return (
      <div id="newDropdown" className="dropdown-content-new">
        <button className="new-dropdown-item">
          <svg className="dropdownMenuIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33"><path d="M7.3 32.7c-0.1 0-0.2 0-0.2-0.1 -0.2-0.1-0.3-0.3-0.3-0.4v-7.1C2.4 22.8 0 18.8 0 13.8 0 6.1 7.1 0.3 16.5 0.3S33 6.1 33 13.8c0 7.7-7.1 13.5-16.5 13.5 -0.3 0-0.6 0-0.9 0l0 0 -8 5.3C7.5 32.7 7.4 32.7 7.3 32.7zM16.5 1.3C7.7 1.3 1 6.7 1 13.8c0 3.3 1.1 7.8 6.5 10.5 0.2 0.1 0.3 0.3 0.3 0.4v6.5l7.4-4.9c0.1-0.1 0.2-0.1 0.3-0.1l0.2 0c0.3 0 0.6 0 0.9 0 8.8 0 15.5-5.4 15.5-12.5S25.3 1.3 16.5 1.3z" /></svg>
          Task
        </button>
        <button className="new-dropdown-item" onClick={this.props.openModal(CREATE_PROJECT)}>
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

  //////////    Sub-Components   //////////  
  
  renderTopBarLeft() {
    return (
      <div className="top-bar-left">
        <div className="top-bar-left-index">
          <Switch>
            <Route exact path="/home" render={() => (<span>Home</span>)} />
            <Route path="/projects/:projectId/:taskId?" render={() => this.renderProjectView()} />
          </Switch>
        </div>
      </div>
    );
  }

  renderProjectView() {
    return (
      <div className="top-bar-project-view-container">
        <div className="med-chip-icon">
          <svg className="small-project-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.1 60.1"><path d="M57.1 51.9H16.9c-1.7 0-3-1.3-3-3s1.3-3 3-3h40.2c1.7 0 3 1.3 3 3S58.8 51.9 57.1 51.9z" /><path d="M57.1 33.1H16.9c-1.7 0-3-1.3-3-3s1.3-3 3-3h40.2c1.7 0 3 1.3 3 3C60.1 31.7 58.8 33.1 57.1 33.1z" /><path d="M57.1 14.2H16.9c-1.7 0-3-1.3-3-3s1.3-3 3-3h40.2c1.7 0 3 1.3 3 3S58.8 14.2 57.1 14.2z" /><circle cx="4" cy="11.5" r="4" /><circle cx="4" cy="30.1" r="4" /><circle cx="4" cy="48.7" r="4" /></svg>
        </div>
        <div className="top-bar-nav">
          <div className="top-bar-project-interaction">
            <span>{this.props.project.name}</span>
          </div>
          <div className="top-bar-tabs">      
            <div className="top-bar-tab-item" id="top-bar-incomplete" onClick={this.handleIncompleteDisplay} >Incomplete Tasks</div>
            <div className="top-bar-tab-item" id="top-bar-complete" onClick={this.handleCompleteDisplay} >Completed Tasks</div>
            <div className="top-bar-tab-item" id="top-bar-all" onClick={this.handleAllDisplay} >All Tasks</div>
          </div>
        </div>
      </div>
    );
  }

  //////////      Main Render          ////////// 

  render() {
    if (this.props === undefined) {
      return null
    } else {
      return (
        <div className="top-bar-container"> 
          {this.renderTopBarLeft()}

          <div className="top-bar-right">
            
            {/* <div className="dropdown">
              <button onClick={handleDropdownClick("newDropdown")} className="top-bar-gradient-button">+ New</button>
              {this.newButtonDropdown()}
            </div>

            <button className="top-bar-question-button">?</button>
            <button className="top-bar-upgrade-button">Upgrade</button> */}
            
            <div className="dropdown">
              <button onClick={handleDropdownClick("userDropdown")} className="user-circle-button">{this.props.currentUser.initials}</button>
              {this.userIconDropdown()}
            </div>
            
          </div>
        </div>
      );
    } 
  }
};

export default TopBarIndex;

