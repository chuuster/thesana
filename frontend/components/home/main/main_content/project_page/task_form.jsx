import React from 'react';
import { withRouter } from 'react-router-dom';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskClose = this.handleTaskClose.bind(this);
    this.renderToolbar = this.renderToolbar.bind(this);
  }

  ////////// Click/Input Handlers //////////

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleTaskClose() {
    this.props.history.push(`/projects/${this.props.match.params.projectId}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTask(this.state);
  }

  ////////// Lifecycle Methods //////////

  // shouldComponentUpdate() {
  //   debugger;
  //   if (this.props.project === undefined) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  componentDidMount() {
    // this.props.fetchTask(this.props.match.params.taskId);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.task.id !== this.props.task.id) {
      this.setState(this.props.task)
    }
  }

  ////////// Sub Components //////////

  renderNameInput() {
    return (
      <textarea
        placeholder="Write a task name"
        className="task-name-detail-input"
        onChange={this.update("name")}
        value={this.state.name}>
      </textarea>
    );
  }

  renderToolbar() {
    return (
      <div className="task-form-toolbar">
        <button className="mark-complete-button">
          <svg className="mark-complete-check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.5 75.5c-10-10-26.2-10-36.2 0L161.6 382.2 43.7 264.3c-10-10-26.2-10-36.2 0 -10 10-10 26.2 0 36.2l136 136c10 10 26.2 10 36.2 0L504.5 111.7C514.5 101.7 514.5 85.5 504.5 75.5z" /></svg>
          Mark Complete
                </button>
        <div onClick={this.handleTaskClose} className="close-x">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.1 31.1"><polygon points="31.1 1.4 29.7 0 15.6 14.1 1.4 0 0 1.4 14.1 15.6 0 29.7 1.4 31.1 15.6 17 29.7 31.1 31.1 29.7 17 15.6 " /></svg>
        </div>
      </div>
    );
  }

  renderCalendarSection() {
    return (
      <div className="due-date-section">
        <div className="due-date-button">
          <div className="dashed-circle-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 366.8 366.8"><path d="M353.4 71.6c-2.4-11.6-8-22-16-30 -2.4-2.4-5.2-4.8-8.4-6.8l-0.4-0.4c-0.4-0.4-0.8-0.4-1.2-0.8 -1.2-0.8-2.4-1.6-3.6-2h-0.4c-8.4-4.4-17.6-6.8-28-6.8h-24.8V7.6c0-4-3.2-7.6-7.6-7.6 -4 0-7.6 3.2-7.6 7.6V24H111.8V7.6c0-4-3.6-7.6-7.6-7.6s-7.6 3.2-7.6 7.6V24H71.8c-7.6 0-15.2 1.6-22 4.4 -7.6 3.2-14.4 7.6-20 13.2 -3.2 3.2-6 6.8-8.4 10.4 -2.4 4-4.4 8-6 12.4 -0.8 2.4-1.6 4.8-2 7.2 -0.8 4-1.2 8-1.2 12v40V308c0 16.4 6.8 31.2 17.2 41.6C40.2 360.4 55 366.8 71 366.8h224.8c16.4 0 31.2-6.8 41.6-17.2 10.8-10.8 17.2-25.6 17.2-41.6V123.6v-40C354.6 79.6 354.2 75.6 353.4 71.6zM27.8 83.2c0-3.2 0.4-6 0.8-8.8 0.4-2.8 1.6-5.6 2.4-8.4 1.6-3.6 3.6-6.8 5.6-9.6 1.2-1.6 2.4-2.8 3.6-4.4 2.4-2.4 5.2-4.4 8-6.4 6.8-4 14.4-6.4 22.8-6.4h24.8v16.4c0 4 3.2 7.6 7.6 7.6 4 0 7.6-3.2 7.6-7.6V39.2h145.6v16.4c0 4 3.2 7.6 7.6 7.6 4 0 7.6-3.2 7.6-7.6V39.2h24.8c8.4 0 16.4 2.4 22.8 6.4 2.8 2 5.6 4 8 6.4 6 6 10.4 13.6 12 22.4 0.4 2.8 0.8 6 0.8 8.8V116H27.8V83.2zM340.6 307.6c0 12.4-4.8 23.6-12.8 31.6S308.6 352 296.6 352H71.8c-12 0-23.2-4.8-31.2-12.8S27.8 320 27.8 308V130.8h312.8V307.6z" /></svg>
          </div>
          <div>Due Date</div>
        </div>
      </div>
    );
  }

  renderAssigneeSection() {
    return (
      <div className="assignee-section">
        <div className="assignee-button">
          <div className="dashed-circle-icon">
            <svg viewBox="0 0 32 32">
              <path d="M16,18c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S20.4,18,16,18z M16,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S19.3,4,16,4z" />
              <path d="M29,32c-0.6,0-1-0.4-1-1v-4.2c0-2.6-2.2-4.8-4.8-4.8H8.8C6.2,22,4,24.2,4,26.8V31c0,0.6-0.4,1-1,1s-1-0.4-1-1v-4.2C2,23,5,20,8.8,20h14.4c3.7,0,6.8,3,6.8,6.8V31C30,31.6,29.6,32,29,32z" />
            </svg>
          </div>
          <div>Unassigned</div>
        </div>
      </div>
    );
  }

  renderDescriptionSection() {
    return (
      <div className="description-section">
        <svg xmlns="http://www.w3.org/2000/svg" width="985" height="985" viewBox="0 0 985 985"><path d="M915 61.6H70c-38.7 0-70 31.3-70 70 0 38.7 31.3 70 70 70h845c38.7 0 70-31.3 70-70C985 92.9 953.7 61.6 915 61.6z" /><path d="M985 612.9c0-38.7-31.3-70-70-70H70c-38.7 0-70 31.3-70 70 0 38.7 31.3 70 70 70h845C953.7 682.9 985 651.5 985 612.9z" /><path d="M70 442.2h695.4c38.7 0 70-31.3 70-70s-31.3-70-70-70H70c-38.7 0-70 31.3-70 70S31.3 442.2 70 442.2z" /><path d="M592.3 853.5c0-38.7-31.3-70-70-70H70c-38.7 0-70 31.3-70 70 0 38.7 31.3 70 70 70h452.3C561 923.5 592.3 892.1 592.3 853.5z" /></svg>
        <textarea
          onChange={this.update("description")}
          className="task-description-detail"
          value={this.state.description}
          placeholder="Description"
        >
        </textarea>
      </div>
    );
  }

  renderProjectSection() {
    return (
      <div className="project-section">
        <svg height="511pt" viewBox="-64 0 511 511.9999" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m336.472656 64.035156h-47.996094v-16c0-8.835937-7.160156-16-15.996093-16h-34.734375c-8.820313-24.996094-36.238282-38.109375-61.234375-29.285156-13.6875 4.832031-24.457031 15.597656-29.289063 29.285156h-34.730468c-8.835938 0-16 7.164063-16 16v16h-47.996094c-26.507813 0-47.996094 21.488282-47.996094 47.996094v351.972656c0 26.507813 21.488281 47.996094 47.996094 47.996094h287.980468c26.507813 0 47.996094-21.488281 47.996094-47.996094v-351.972656c-.003906-26.507812-21.492187-47.996094-48-47.996094zm-207.984375 0h32c8.835938 0 16-7.164062 16-16 0-8.835937 7.160157-16 15.996094-16s16 7.164063 16 16c0 8.835938 7.164063 16 16 16h31.996094v31.996094h-127.992188zm223.984375 399.96875c0 8.835938-7.164062 16-16 16h-287.976562c-8.835938 0-16-7.164062-16-16v-351.972656c0-8.835938 7.164062-16 16-16h47.996094v16c0 8.835938 7.164062 15.996094 16 15.996094h159.988281c8.835937 0 15.996093-7.160156 15.996093-15.996094v-16h48c8.835938 0 15.996094 7.164062 15.996094 16zm0 0" /><path d="m288.476562 192.023438h-191.984374c-8.835938 0-16 7.164062-16 16 0 8.835937 7.164062 16 16 16h191.984374c8.835938 0 16-7.164063 16-16 0-8.835938-7.164062-16-16-16zm0 0" /><path d="m288.476562 288.015625h-191.984374c-8.835938 0-16 7.164063-16 16s7.164062 16 16 16h191.984374c8.835938 0 16-7.164063 16-16s-7.164062-16-16-16zm0 0" /><path d="m288.476562 384.011719h-191.984374c-8.835938 0-16 7.160156-16 15.996093 0 8.835938 7.164062 16 16 16h191.984374c8.835938 0 16-7.164062 16-16 0-8.835937-7.164062-15.996093-16-15.996093zm0 0" /></svg>
        <div className="belong-to-project-button">Project Name</div>
      </div>
    );
  }

  renderTaskStorySection() {
    return (
      <div className="task-story-section">
        <div className="task-story">
          User created task. 11 days ago<br></br>
          User added task to Project Name. 11 days ago
        </div>
      </div>
    );
  }

  ////////// Main Render //////////

  render() {
    if (this.props.task.id === "") {
      return null;
    } else {
      return (
        <div className="task-form-container">
          <form onSubmit={this.handleSubmit} className="task-form-box">
            <header>
              {this.renderToolbar()}
            </header>

            <div className="form-body">
              {this.renderNameInput()}

              <div className="assignee-due-date-row">
                {this.renderAssigneeSection()}
                {this.renderCalendarSection()}
              </div>

              {this.renderDescriptionSection()}
              {this.renderProjectSection()}
              {this.renderTaskStorySection()}

              <div className="update-task-button-row">
                <input type="submit" className="blue-button" value="Update Task"/>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default (TaskForm);