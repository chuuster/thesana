import React from 'react';
import { Link } from 'react-router-dom';

class SideBarIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  ////////// Lifecycle Methods //////////

  // componentDidMount() {
  //   this.props.fetchProjects();
  // }

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
        <div className="mini-chip-icon"></div>
        <span>{project.name}</span>
      </Link>
    );
  }

  renderTeamMemberIndexItem(member) {
    return (
      <button key={member.id} className="user-circle-button">{member.initials}</button>
    );
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
