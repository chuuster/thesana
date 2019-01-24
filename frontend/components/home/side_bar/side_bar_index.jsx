import React from 'react';
import { Link } from 'react-router-dom';
import { UPDATE_PROJECT, REMOVE_PROJECT, CREATE_PROJECT } from "../../modal/modal";

class SideBarIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  ////////// Click Handlers //////////

  handleProjectOptionsClick(projectString) {
    return (e) => {
      e.stopPropagation();
      e.preventDefault();
      handleDropdownClick(projectString)();
    };
  }

  handleProjectOptionSelect(purpose, projectId) {
    return (e) => {
      e.preventDefault();
      this.props.openModal(purpose, projectId)();
    }
  }

  ////////// Sub Components //////////
  sideBarStaticRender() {
    return (
      <>
        <div className="side-header">
          <Link to="/"><img src={window.greenLogoURL} id="logo-home" /></Link>
        </div>
        <section className="side-links-section">
          <Link to="/home" className="side-bar-link-container">
            <img src={window.homeIconURL} className="side-bar-icon" />
            <span className="side-bar-link-text">Home</span>
          </Link>
          <div className="side-bar-link-container">
            <img src={window.myTasksIconURL} className="side-bar-icon" />
            <span className="side-bar-link-text">My Tasks</span>
          </div>
          <div className="side-bar-link-container">
            <img src={window.inboxIconURL} className="side-bar-icon" />
            <span className="side-bar-link-text">Inbox</span>
          </div>
          <div className="side-bar-link-container">
            <img src={window.portfolioIconURL} className="side-bar-icon" />
            <span className="side-bar-link-text">Portfolios</span>
          </div>
        </section>
        <div className="side-bar-reports">
          <div className="side-bar-report-header">Reports</div>
          <div className="side-bar-report-link">Tasks I've Created</div>
          <div className="side-bar-report-link">Tasks I've Assigned To Others</div>
          <div className="side-bar-report-link">Recently Completed Tasks</div>
        </div>
      </>
    );
  }

  renderProjectIndexItem(project) {
    return (
      <Link to={`/projects/${project.id}`} key={project.id} className="side-project-index-item">
        <div className="project-row-left">
          <div className="mini-chip-icon"></div>
          <span>{project.name}</span>
        </div>
        <div className="project-row-right">
          <button onClick={this.handleProjectOptionsClick(`sideProjectOptionsDropdown-${project.id}`)} className="side-project-options-button">
            <svg className="side-project-options-icon" xmlns="http://www.w3.org/2000/svg" width="612" height="612" viewBox="0 0 612 612"><path d="M55.6 250.4C24.9 250.4 0 275.3 0 306c0 30.7 24.9 55.6 55.6 55.6S111.3 336.7 111.3 306C111.3 275.3 86.4 250.4 55.6 250.4zM315.3 250.4c-30.7 0-55.6 24.9-55.6 55.6 0 30.7 24.9 55.6 55.6 55.6 30.7 0 55.6-24.9 55.6-55.6C370.9 275.3 346 250.4 315.3 250.4zM556.4 250.4c-30.7 0-55.6 24.9-55.6 55.6 0 30.7 24.9 55.6 55.6 55.6C587.1 361.6 612 336.7 612 306 612 275.3 587.1 250.4 556.4 250.4z" /></svg>
          </button>
          {this.renderProjectOptions(project)}
        </div>
      </Link>
    );
  }

  renderProjectOptions(project) {
    return (
      <div id={`sideProjectOptionsDropdown-${project.id}`} className="dropdown-content-project">
        <button onClick={this.handleProjectOptionSelect(UPDATE_PROJECT, project.id)} className="project-dropdown-item">Edit Project... </button>
        <button onClick={this.handleProjectOptionSelect(REMOVE_PROJECT, project.id)} className="project-dropdown-item">Delete Project</button>
        <button className="project-dropdown-item">Go To Project Link</button>
      </div>
    );
  }

  renderTeamMemberIndexItem(member) {
    if (member !== null) {
      return (
        <div key={member.id} className="team-member-index-item">
          <button className="user-circle-button">{member.initials}
            <div className="team-member-index-hover">
              <span>{`${member.fname} ${member.lname}`}</span>
            </div>
          </button>
        </div>
      );
    }
  }

  ////////// Main Render //////////

  render() {
    return (
      <div className="side-bar-container">
        {this.sideBarStaticRender()}

        <div className="side-team-index">
          
          <div className="team-index-item">
            <span>Team Awesome</span>
            
            <div className="member-index">
              {this.props.users.map((user) => this.renderTeamMemberIndexItem(user))}
            </div>

            <div className="project-index">
              {this.props.projects.map((project) => this.renderProjectIndexItem(project))}
            </div>

          </div>
        </div>
      </div>
    )
  }
};

export default SideBarIndex;
