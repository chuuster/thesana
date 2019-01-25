import moment from 'moment';
import React from 'react';

export default class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
  } 
  
  shouldComponentUpdate(nextProps) {
    if (document.querySelector(`[task="${this.props.task.id}"]`).classList.contains("success") ||
      this.props.task.name === nextProps.task.name &&
      this.props.task.assignee_id === nextProps.task.assignee_id && 
      this.props.task.due_date === nextProps.task.due_date && 
      this.props.task.done === nextProps.task.done) {
      return false;
    }

    return true;
  }

  // Click Handlers 

  handleFormAreaClick(taskId) {
    return (e) => {
      this.props.history.push(`/projects/${this.props.project.id}/${taskId}`);
    };
  }

  update(field, id) {
    return (e) => {
      const task = { name: e.currentTarget.value, id: id }
      this.setState({ [field]: e.currentTarget.value }, () => this.props.updateTask(task));
    };
  }

  toggleDone(id, value) {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      const taskRow = document.querySelector(`[task="${id}"]`);
      if (taskRow.classList.contains("incomplete-task")) {
        taskRow.classList.add("success");
        taskRow.classList.remove("incomplete-task");
        taskRow.classList.add("completed-task");
        document.querySelector(`[checkid="${id}"]`).classList.add("faded-check");
      } else {
        document.querySelector(`[checkid="${id}"]`).classList.remove("faded-check");
        taskRow.classList.remove("completed-task");
        taskRow.classList.add("incomplete-task");
      }
      this.props.updateTask({ id: id, done: value });
    };
  }

  /////// Main Render

  render() {
    let checkClass, userIcon, dueDate, rowClass;
    { (this.props.task.done) ? checkClass = "mark-complete-check-button faded-check" : checkClass = "mark-complete-check-button" }

    if (Number.isInteger(this.props.task.assignee_id) && Object.keys(this.props.users).length > 1) {
      userIcon = <button className="user-circle-button">{this.props.users[this.props.task.assignee_id].initials}</button>
    } else {
      userIcon = (<div></div>
        // <div className="project-user-icon-placeholder"></div>
        // <div className="dashed-circle-icon">
        //   <svg viewBox="0 0 32 32">
        //     <path d="M16,18c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S20.4,18,16,18z M16,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S19.3,4,16,4z" />
        //     <path d="M29,32c-0.6,0-1-0.4-1-1v-4.2c0-2.6-2.2-4.8-4.8-4.8H8.8C6.2,22,4,24.2,4,26.8V31c0,0.6-0.4,1-1,1s-1-0.4-1-1v-4.2C2,23,5,20,8.8,20h14.4c3.7,0,6.8,3,6.8,6.8V31C30,31.6,29.6,32,29,32z" />
        //   </svg>
        // </div>
      )
    }

    (!!this.props.task.due_date) ? dueDate = moment(this.props.task.due_date).format("MMM D") : dueDate = "";
    (!!this.props.task.done) ? rowClass = "task-index-row completed-task task-hide" : rowClass = "task-index-row incomplete-task";

    return (
      <div task={this.props.task.id} onClick={this.handleFormAreaClick(this.props.task.id)} className={rowClass}>
        <div className="task-index-row-left">
          {/* <form>
            <div onClick={this.toggleDone(this.props.task.id, !this.props.task.done)} className={checkClass}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.5 75.5c-10-10-26.2-10-36.2 0L161.6 382.2 43.7 264.3c-10-10-26.2-10-36.2 0 -10 10-10 26.2 0 36.2l136 136c10 10 26.2 10 36.2 0L504.5 111.7C514.5 101.7 514.5 85.5 504.5 75.5z" /></svg>
            </div>
            <input
              type="text"
              onChange={this.update("name", this.props.task.id)}
              className="task-name-input"
              value={(this.props.task.name) ? this.props.task.name : ""} />
          </form> */}
          <form>
            <div onClick={this.toggleDone(this.props.task.id, !this.props.task.done)} checkid={this.props.task.id} className={checkClass}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.5 75.5c-10-10-26.2-10-36.2 0L161.6 382.2 43.7 264.3c-10-10-26.2-10-36.2 0 -10 10-10 26.2 0 36.2l136 136c10 10 26.2 10 36.2 0L504.5 111.7C514.5 101.7 514.5 85.5 504.5 75.5z" /></svg>
            </div>
            <span className="task-name-input">{this.props.task.name}</span>
          </form>
        </div>
        <div className="task-index-row-right">
          <div className="task-row-due-date">
            {dueDate}
          </div>
          <div className="task-row-assignee-icon">
            {userIcon}
          </div>
        </div>
      </div>
    );
  }
}
