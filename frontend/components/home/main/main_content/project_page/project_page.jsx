import React from 'react';
import { Route } from 'react-router-dom';
import merge from 'lodash/merge';
import { ProtectedRoute } from "../../../../../util/route_util";
import EditTaskFormContainer from "./edit_task_form_container";


class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.renderTaskRow = this.renderTaskRow.bind(this);
    this.handleFormAreaClick = this.handleFormAreaClick.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    if (props.match.params.taskId && Object.values(props.tasks).length > 1) {
      this.state = props.tasks[props.match.params.taskId];
    } else {
      console.log("no");
    }
  }

  ////////// Lifecycle Methods //////////

  ////////// Click Handlers //////////

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value }, () => this.props.updateTask(this.state));
    };
  }


  handleFormAreaClick(taskId) {
    return (e) => {
      this.props.history.push(`/projects/${this.props.project.id}/${taskId}`);
    };
  }

  handleAddTask(e) {
    this.props.createTask({project_id: this.props.project.id, done: false});
  }

  ////////// Sub Components //////////

  renderTaskRow(task) {
    return (
      <div key={task.id} onClick={this.handleFormAreaClick(task.id)} className="task-index-row">
        <div className="task-index-row-left">
          <form>
            <div className="mark-complete-check-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.5 75.5c-10-10-26.2-10-36.2 0L161.6 382.2 43.7 264.3c-10-10-26.2-10-36.2 0 -10 10-10 26.2 0 36.2l136 136c10 10 26.2 10 36.2 0L504.5 111.7C514.5 101.7 514.5 85.5 504.5 75.5z" /></svg>
            </div>
            <textarea 
              // onChange={this.update("name")}  
              className="task-name-textarea" 
              // value={(this.state && task.id === this.props.match.params.taskId) ? this.state.name : "not state" }
              value={task.name}>
            </textarea>
          </form>
        </div>
      </div>
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
            {Object.values(this.props.tasks).map(task => this.renderTaskRow(task))}
          </div>
        </div>
        {/* {(this.props.match.params.taskId) ? <TaskFormContainer /> : ""} */}
        <ProtectedRoute exact path="/projects/:projectId/:taskId" component={EditTaskFormContainer}/>
      </div>
    );
  }
}

export default ProjectPage;