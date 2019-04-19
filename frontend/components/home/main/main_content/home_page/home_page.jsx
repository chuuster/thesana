import React from 'react';
import { CREATE_PROJECT } from "../../../../modal/modal";
import { UPDATE_PROJECT } from "../../../../modal/modal";
import { REMOVE_PROJECT } from "../../../../modal/modal";
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {activeProjectModalId: null};
  }
  
  //////////   Click Handler //////////
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
    };
  }


  //////////   Sub Components //////////

  renderProjectOptions(project) {
    return (
      <div id={`projectOptionsDropdown-${project.id}`} className="dropdown-content-project">
        <button onClick={this.handleProjectOptionSelect(UPDATE_PROJECT, project.id)} className="project-dropdown-item">Edit Project... </button>
        <button onClick={this.handleProjectOptionSelect(REMOVE_PROJECT, project.id)} className="project-dropdown-item">Delete Project</button>
        <button className="project-dropdown-item">Go To Project Link</button>
      </div>
    );
  }

  renderProjectIndexItem(project) {
    return (
      <Link to={`/projects/${project.id}`} key={project.id} className="home-project-index-item">
        <div className="big-chip-icon">
          <div className="big-chip-icon-top-nav">
            <button onClick={this.handleProjectOptionsClick(`projectOptionsDropdown-${project.id}`)} className="big-chip-project-options">
              <svg className="big-chip-project-options-icon" xmlns="http://www.w3.org/2000/svg" width="612" height="612" viewBox="0 0 612 612"><path d="M55.6 250.4C24.9 250.4 0 275.3 0 306c0 30.7 24.9 55.6 55.6 55.6S111.3 336.7 111.3 306C111.3 275.3 86.4 250.4 55.6 250.4zM315.3 250.4c-30.7 0-55.6 24.9-55.6 55.6 0 30.7 24.9 55.6 55.6 55.6 30.7 0 55.6-24.9 55.6-55.6C370.9 275.3 346 250.4 315.3 250.4zM556.4 250.4c-30.7 0-55.6 24.9-55.6 55.6 0 30.7 24.9 55.6 55.6 55.6C587.1 361.6 612 336.7 612 306 612 275.3 587.1 250.4 556.4 250.4z" /></svg>
            </button>
            {this.renderProjectOptions(project)}
          </div>
          <svg className="big-project-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.1 60.1"><path d="M57.1 51.9H16.9c-1.7 0-3-1.3-3-3s1.3-3 3-3h40.2c1.7 0 3 1.3 3 3S58.8 51.9 57.1 51.9z" /><path d="M57.1 33.1H16.9c-1.7 0-3-1.3-3-3s1.3-3 3-3h40.2c1.7 0 3 1.3 3 3C60.1 31.7 58.8 33.1 57.1 33.1z" /><path d="M57.1 14.2H16.9c-1.7 0-3-1.3-3-3s1.3-3 3-3h40.2c1.7 0 3 1.3 3 3S58.8 14.2 57.1 14.2z" /><circle cx="4" cy="11.5" r="4" /><circle cx="4" cy="30.1" r="4" /><circle cx="4" cy="48.7" r="4" /></svg>
        </div>
        <span>{project.name}</span>
      </Link>
    );
  }

  //////////   Main Render //////////
  
  render() {
    return (
      <div id="home-page-container-outer">
        <div id="home-page-container-inner">
          <div className="home-page-section-header">
            <span>Tasks Due Soon</span>
          </div>
          <div id="tasks-due-index">
            <span>No tasks due in the next five days</span>
          </div>
          <div className="home-page-section-header">
            <span>Recent Projects</span>
          </div>
          <div id="home-project-index">
            {this.props.projects.map((project) => this.renderProjectIndexItem(project))}
            <div onClick={this.props.openModal(CREATE_PROJECT)} className="home-project-index-item">
              <div id="home-new-project-icon">+</div>
              <span>New Project</span>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;