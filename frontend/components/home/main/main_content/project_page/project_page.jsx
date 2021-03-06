import React from "react";
import { Route } from "react-router-dom";
import merge from "lodash/merge";
import { ProtectedRoute } from "../../../../../util/route_util";
import EditTaskFormContainer from "./edit_task_form_container";
import ProjectIndexItem from "./project_index_item";

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  ////////// Click Handlers //////////

  handleAddTask(e) {
    this.props
      .createTask({ project_id: this.props.project.id, done: false })
      .then((res) => this.props.fetchProject(this.props.project.id))
      .then((res) => {
        // find the last ProjectIdxItem and focus on input
        const lastTask = document.querySelectorAll(
          ".task-index-row:last-child .task-name-input"
        );
        lastTask[0].focus();
      });
  }

  ////////// Sub Components //////////

  renderAssigneeDropdown() {
    const usersArray = Object.values(this.props.users);
    return (
      <ul id="task-row-assignee-dropdown" className="dropdown-content-assignee">
        {usersArray.map((user) => {
          return (
            <li onClick={this.handleAssigneeSelect(user.id)} key={user.id}>
              <button key={user.id} className="user-circle-button">
                {user.initials}
              </button>
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
            <button className="blue-button" onClick={this.handleAddTask}>
              Add Task
            </button>
          </div>

          <div className="task-index-content">
            {Object.keys(this.props.tasks).map((id) => (
              <ProjectIndexItem
                task={this.props.tasks[id]}
                key={id}
                project={this.props.project}
                updateTask={this.props.updateTask}
                addTask={this.handleAddTask}
                users={this.props.users}
                history={this.props.history}
              />
            ))}
          </div>
          <footer id="task-index-footer"></footer>
        </div>
        <ProtectedRoute
          exact
          path="/projects/:projectId/:taskId"
          component={EditTaskFormContainer}
        />
      </div>
    );
  }
}

export default ProjectPage;
