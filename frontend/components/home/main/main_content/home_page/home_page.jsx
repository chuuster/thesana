import React from 'react';
// import { Route, Switch } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

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
            <div className="home-project-index-item">
              <div className="big-chip-icon">
                <svg className="big-project-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.1 60.1"><path d="M57.1 51.9H16.9c-1.7 0-3-1.3-3-3s1.3-3 3-3h40.2c1.7 0 3 1.3 3 3S58.8 51.9 57.1 51.9z" /><path d="M57.1 33.1H16.9c-1.7 0-3-1.3-3-3s1.3-3 3-3h40.2c1.7 0 3 1.3 3 3C60.1 31.7 58.8 33.1 57.1 33.1z" /><path d="M57.1 14.2H16.9c-1.7 0-3-1.3-3-3s1.3-3 3-3h40.2c1.7 0 3 1.3 3 3S58.8 14.2 57.1 14.2z" /><circle cx="4" cy="11.5" r="4" /><circle cx="4" cy="30.1" r="4" /><circle cx="4" cy="48.7" r="4" /></svg>
              </div>
              <span>Project Name</span>
            </div>
            <div className="home-project-index-item">
              <div className="big-chip-icon">
                <svg className="big-project-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.1 60.1"><path d="M57.1 51.9H16.9c-1.7 0-3-1.3-3-3s1.3-3 3-3h40.2c1.7 0 3 1.3 3 3S58.8 51.9 57.1 51.9z" /><path d="M57.1 33.1H16.9c-1.7 0-3-1.3-3-3s1.3-3 3-3h40.2c1.7 0 3 1.3 3 3C60.1 31.7 58.8 33.1 57.1 33.1z" /><path d="M57.1 14.2H16.9c-1.7 0-3-1.3-3-3s1.3-3 3-3h40.2c1.7 0 3 1.3 3 3S58.8 14.2 57.1 14.2z" /><circle cx="4" cy="11.5" r="4" /><circle cx="4" cy="30.1" r="4" /><circle cx="4" cy="48.7" r="4" /></svg>
              </div>
              <span>Project Name 2</span>
            </div>
            <div className="home-project-index-item">
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