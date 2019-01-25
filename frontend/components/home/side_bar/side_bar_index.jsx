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
            <svg id="side-bar-home-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M506.6 208.1L263.9 30.4c-4.7-3.4-11-3.4-15.7 0L5.4 208.1c-5.9 4.3-7.2 12.7-2.9 18.6s12.7 7.2 18.6 2.9L256 57.6l234.8 171.9c2.4 1.7 5.1 2.6 7.8 2.6 4.1 0 8.1-1.9 10.7-5.4C513.8 220.7 512.5 212.4 506.6 208.1z" /><path d="M442.2 232.5c-7.3 0-13.3 6-13.3 13.3v211.7H322.5V342c0-36.7-29.8-66.5-66.5-66.5s-66.5 29.8-66.5 66.5v115.6H83.1V245.8c0-7.3-6-13.3-13.3-13.3s-13.3 6-13.3 13.3v225.1c0 7.3 6 13.3 13.3 13.3h133c7 0 12.7-5.4 13.3-12.3 0-0.3 0.1-0.7 0.1-1v-128.9c0-22 17.9-39.9 39.9-39.9s39.9 17.9 39.9 39.9v128.9c0 0.4 0 0.7 0.1 1 0.5 6.9 6.3 12.3 13.3 12.3h133c7.3 0 13.3-6 13.3-13.3V245.8C455.5 238.5 449.6 232.5 442.2 232.5z" /></svg>
            <span className="side-bar-link-text">Home</span>
          </Link>
          <div className="side-bar-link-container">
            <div id="side-bar-check-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.5 75.5c-10-10-26.2-10-36.2 0L161.6 382.2 43.7 264.3c-10-10-26.2-10-36.2 0 -10 10-10 26.2 0 36.2l136 136c10 10 26.2 10 36.2 0L504.5 111.7C514.5 101.7 514.5 85.5 504.5 75.5z" /></svg>
            </div>
            <span className="side-bar-link-text">My Tasks</span>
          </div>
          {/* <div className="side-bar-link-container">
            <img src={window.inboxIconURL} className="side-bar-icon" />
            <span className="side-bar-link-text">Inbox</span>
          </div>
          <div className="side-bar-link-container">
            <img src={window.portfolioIconURL} className="side-bar-icon" />
            <span className="side-bar-link-text">Portfolios</span>
          </div> */}
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

  renderFooter() {
    return (
      <footer>
        <section id="side-bar-contacts">
          <a className="contact-link-item" href="https://github.com/chuuster/thesana">
            <svg xmlns="http://www.w3.org/2000/svg" width="439" height="439" viewBox="0 0 438.5 438.5"><path d="M409.1 114.6c-19.6-33.6-46.2-60.2-79.8-79.8C295.7 15.2 259.1 5.4 219.3 5.4c-39.8 0-76.5 9.8-110.1 29.4 -33.6 19.6-60.2 46.2-79.8 79.8C9.8 148.2 0 184.9 0 224.6c0 47.8 13.9 90.7 41.8 128.9 27.9 38.2 63.9 64.6 108.1 79.2 5.1 1 8.9 0.3 11.4-2 2.5-2.3 3.7-5.1 3.7-8.6 0-0.6 0-5.7-0.1-15.4 -0.1-9.7-0.1-18.2-0.1-25.4l-6.6 1.1c-4.2 0.8-9.5 1.1-15.8 1 -6.4-0.1-13-0.8-19.8-2 -6.9-1.2-13.2-4.1-19.1-8.6 -5.9-4.5-10.1-10.3-12.6-17.6l-2.9-6.6c-1.9-4.4-4.9-9.2-9-14.6 -4.1-5.3-8.2-8.9-12.4-10.8l-2-1.4c-1.3-1-2.6-2.1-3.7-3.4 -1.1-1.3-2-2.7-2.6-4 -0.6-1.3-0.1-2.4 1.4-3.3 1.5-0.9 4.3-1.3 8.3-1.3l5.7 0.9c3.8 0.8 8.5 3 14.1 6.9 5.6 3.8 10.2 8.8 13.8 14.8 4.4 7.8 9.7 13.8 15.8 17.8 6.2 4.1 12.4 6.1 18.7 6.1 6.3 0 11.7-0.5 16.3-1.4 4.6-1 8.8-2.4 12.8-4.3 1.7-12.8 6.4-22.6 14-29.4 -10.8-1.1-20.6-2.9-29.3-5.1 -8.7-2.3-17.6-6-26.8-11.1 -9.2-5.1-16.9-11.5-23-19.1 -6.1-7.6-11.1-17.6-15-30 -3.9-12.4-5.9-26.6-5.9-42.8 0-23 7.5-42.6 22.6-58.8 -7-17.3-6.4-36.7 2-58.2 5.5-1.7 13.7-0.4 24.6 3.9 10.9 4.3 18.8 8 23.8 11 5 3 9.1 5.6 12.1 7.7 17.7-4.9 36-7.4 54.8-7.4s37.1 2.5 54.8 7.4l10.8-6.8c7.4-4.6 16.2-8.8 26.3-12.6 10.1-3.8 17.8-4.9 23.1-3.1 8.6 21.5 9.3 40.9 2.3 58.2 15 16.2 22.6 35.8 22.6 58.8 0 16.2-2 30.5-5.9 43 -3.9 12.5-8.9 22.5-15.1 30 -6.2 7.5-13.9 13.9-23.1 19 -9.2 5.1-18.2 8.9-26.8 11.1 -8.7 2.3-18.4 4-29.3 5.1 9.9 8.6 14.8 22.1 14.8 40.5v60.2c0 3.4 1.2 6.3 3.6 8.6 2.4 2.3 6.1 3 11.3 2 44.2-14.7 80.2-41.1 108.1-79.2 27.9-38.2 41.8-81.1 41.8-128.9C438.5 184.9 428.7 148.2 409.1 114.6z" /></svg>
          </a>
          <a className="contact-link-item" href="https://www.linkedin.com/in/christinachu7/">
            <svg xmlns="http://www.w3.org/2000/svg" width="430" height="430" viewBox="0 0 430.1 430.1"><path d="M398.4 0H31.8C14.2 0 0 13.8 0 30.8v368.5c0 17 14.2 30.8 31.8 30.8h366.6c17.5 0 31.8-13.8 31.8-30.8V30.8C430.1 13.8 415.9 0 398.4 0zM130.4 360H65.4V165.8H130.4V360zM97.9 139.3h-0.4c-21.8 0-35.9-14.9-35.9-33.6 0-19 14.5-33.5 36.8-33.5 22.2 0 35.9 14.5 36.3 33.5C134.7 124.4 120.6 139.3 97.9 139.3zM364.7 360h-65V256.1c0-26.1-9.4-43.9-32.9-43.9 -18 0-28.6 12-33.3 23.6 -1.7 4.1-2.2 9.9-2.2 15.7v108.5h-65c0 0 0.9-176 0-194.2h65v27.5c8.6-13.2 24-32.1 58.5-32.1 42.8 0 74.8 27.7 74.8 87.4V360zM230.9 194c0.1-0.2 0.3-0.4 0.4-0.6v0.6H230.9z" /></svg>
          </a>
          <a className="contact-link-item" href="https:/ccchu.me">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M469.3 106.7H362.7V85.3c0-23.5-19.1-42.7-42.7-42.7H192c-23.5 0-42.7 19.1-42.7 42.7v21.3H42.7C19.1 106.7 0 125.8 0 149.3v64C0 236.9 19.1 256 42.7 256h170.7v-10.7c0-5.9 4.8-10.7 10.7-10.7h64c5.9 0 10.7 4.8 10.7 10.7V256h170.7C492.9 256 512 236.9 512 213.3v-64C512 125.8 492.9 106.7 469.3 106.7zM320 106.7H192V85.3h128V106.7z" /><path d="M506.1 267.5c-3.6-1.8-8-1.4-11.2 1.1 -7.6 5.7-16.4 8.8-25.6 8.8H298.7v32c0 5.9-4.8 10.7-10.7 10.7h-64c-5.9 0-10.7-4.8-10.7-10.7v-32H42.7c-9.1 0-18-3-25.6-8.8 -3.2-2.5-7.6-2.9-11.2-1.1C2.3 269.3 0 273 0 277.1v149.6c0 23.5 19.1 42.7 42.7 42.7h426.7c23.5 0 42.7-19.1 42.7-42.7V277.1C512 273 509.7 269.3 506.1 267.5z" /></svg>
          </a>
        </section>
        <section id="side-bar-credits">
          <div>Credits: Icons are made by 
            <a href="https://www.freepik.com/" title="Freepik"> Freepik </a> 
            from 
            <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com. </a>
            Thesana is a clone of 
            <a href="https://www.asana.com/" title="Asana"> Asana</a>
            , meant only as a demonstration project.
          </div>
        </section>
      </footer>
    )}

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

        {this.renderFooter()}
      </div>
    )
  }
};

export default SideBarIndex;
