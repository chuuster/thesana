import React from 'react';
import { Link } from 'react-router-dom';

class SideBarIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  sideBarStaticRender() {
    return (
      <>
        <div className="side-header">
          <Link to="/"><img src={window.greenLogoURL} id="logo-home" /></Link>
        </div>
        <section className="side-links-section">
          <div className="side-bar-link-container">
            <img src={window.homeIconURL} className="side-bar-icon" />
            <span className="side-bar-link-text">Home</span>
          </div>
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

  render() {
    return (
      <div className="side-bar-container">
        {this.sideBarStaticRender()}

        <div className="side-team-index">
          
          <div className="team-index-item">
            <span>Team Awesome</span>
            
            <div className="member-index">
              {/* circle buttons? */}
              <button className="user-circle-button">CC</button>
            </div>

            <div className="project-index">
              <div className="project-index-item">
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
};

export default SideBarIndex;
