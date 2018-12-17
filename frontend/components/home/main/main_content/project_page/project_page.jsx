import React from 'react';
// import { Route, Switch } from 'react-router-dom';

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.project === undefined ) {
      return null;
    } else {
      return (
        <div>
          <span>name: {this.props.project.name}</span> <br></br>
          <span>description: {this.props.project.description}</span> 
        </div>
      );
    }
  }
}

export default ProjectPage;