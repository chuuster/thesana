import React from 'react';
import { Route } from 'react-router-dom';
import merge from 'lodash/merge';
import { ProtectedRoute } from "../../../../../util/route_util";
import TaskFormContainer from "./task_form_container";

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.renderTaskRow = this.renderTaskRow.bind(this);
    this.handleFormAreaClick = this.handleFormAreaClick.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
    if (this.props.match.params.taskId) {
      this.state = this.props.tasks[this.props.match.params.taskId]
    }
  }

  ////////// Lifecycle Methods //////////
  // shouldComponentUpdate(nextState, nextProps) {
  //   if (this.props.tasks !== nextProps.tasks) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  ////////// Click Handlers //////////

  update(field, taskId) {
    return (e) => {
      // let task = Object.merge({}, this.state.tasks.taskId, {taskId: {[field]: e.currentTarget.value}});
      this.setState({ [field]: e.currentTarget.value} );
    };
  }

  handleFormAreaClick(taskId) {
    return (e) => {
      this.props.history.push(`/projects/${this.props.project.id}/${taskId}`)
    };
  }

  handleCheckClick(taskId) {

  }

  ////////// Sub Components //////////

  renderTaskRow(task) {
    return (
      <div key={task.id} onClick={this.handleFormAreaClick(task.id)} className="task-index-row">
        <div className="task-index-row-left">
          <form>
            <div className="mark-complete-check-button-container">
              <svg className="mark-complete-check-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M437 75C388.7 26.6 324.4 0 256 0 187.6 0 123.3 26.6 75 75 26.6 123.3 0 187.6 0 256s26.6 132.7 75 181C123.3 485.4 187.6 512 256 512c68.4 0 132.7-26.6 181-75C485.4 388.7 512 324.4 512 256S485.4 123.3 437 75zM256 482C131.4 482 30 380.6 30 256S131.4 30 256 30s226 101.4 226 226S380.6 482 256 482z" /><path d="M378.3 173.9c-5.9-5.9-15.4-5.9-21.2 0L224.6 306.3l-69.7-69.7c-5.9-5.9-15.4-5.9-21.2 0 -5.9 5.9-5.9 15.4 0 21.2l80.3 80.3c2.9 2.9 6.8 4.4 10.6 4.4 3.8 0 7.7-1.5 10.6-4.4l143.1-143.1C384.2 189.2 384.2 179.7 378.3 173.9z" /></svg>        
            </div>
            <textarea 
              onChange={this.update(name)}  
              className="task-name-textarea" 
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
            <button className="blue-button">Add Task</button>
          </div>

          <div className="task-index-content">
            {this.props.tasks.map(task => this.renderTaskRow(task))}
          </div>
        </div>
        {(this.props.match.params.taskId) ? <TaskFormContainer /> : ""}
        {/* <ProtectedRoute exact path="/projects/:projectId/:taskId" component={TaskFormContainer}/> */}
      </div>
    );
  }
}

export default ProjectPage;