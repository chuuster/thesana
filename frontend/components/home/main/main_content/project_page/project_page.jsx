import React from 'react';
import { Route } from 'react-router-dom';
import merge from 'lodash/merge';
import { ProtectedRoute } from "../../../../../util/route_util";
import EditTaskFormContainer from "./edit_task_form_container";
import ProjectIndexItem from './project_index_item'; 

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.renderTaskRow = this.renderTaskRow.bind(this);
    this.handleFormAreaClick = this.handleFormAreaClick.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.state = {name: ''};
  }

  ////////// Lifecycle Methods //////////

  ////////// Click Handlers //////////

  handleAddTask(e) {
    this.props.createTask({project_id: this.props.project.id, done: false}).then((res) => this.props.fetchProject(this.props.project.id));
  }

  toggleDone(id, value) {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.props.updateTask({id: id, done: value});
    }
  }


  ////////// Sub Components //////////

  renderAssigneeDropdown() {
    const usersArray = Object.values(this.props.users)
    return (
      <ul id="task-row-assignee-dropdown" className="dropdown-content-assignee">
        {usersArray.map(user => {
          return (
            <li
              onClick={this.handleAssigneeSelect(user.id)}
              key={user.id}>
              <button key={user.id} className="user-circle-button">{user.initials}</button>
              <span className="user-name">{`${user.fname} ${user.lname}`}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  ////////// Main Render //////////

  render() {
    return (
      <div className="project-page-container">
        <div className="task-index-container">
          <div className="task-index-header">
            <button className="blue-button" onClick={this.handleAddTask}>Add Task</button>
          </div>

          <div className="task-index-content">
            {/* {this.props.tasks.map(task => this.renderTaskRow(task))} */}
            {this.props.tasks.map(task => <ProjectIndexItem 
              task={task} 
              project={this.props.project} 
              updateTask={this.props.updateTask} />}
          </div>
        </div>
        <ProtectedRoute exact path="/projects/:projectId/:taskId" component={EditTaskFormContainer}/>
      </div>
    );
  }
}

export default ProjectPage;