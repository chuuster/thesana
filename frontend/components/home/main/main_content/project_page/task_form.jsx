import React from 'react';
import DatePicker from "react-datepicker";
import DatePickerInput from "./datepicker.jsx";
import UserPicker from "./userpicker";
import debounce from "lodash/debounce";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;
    this.handleTaskClose = this.handleTaskClose.bind(this);
    this.handleDueDate = this.handleDueDate.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleAssigneeRemove = this.handleAssigneeRemove.bind(this);
    this.debouncedUpdateTask = debounce(() => { this.props.updateTask(this.state)}, 500);
  }

  ////////// Click/Input Handlers //////////

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value }, 
        this.debouncedUpdateTask
      );
    };
  }

  handleDueDate(date) {
    this.setState({ due_date: date }, () => this.props.updateTask(this.state));
  }

  handleDeleteTask(e) {
    this.props.deleteTask(this.state.id)
      .then(this.handleTaskClose);
  }

  handleTaskClose() {
    this.props.history.push(`/projects/${this.props.match.params.projectId}`);
  }

  toggleDone(value) {
    return (e) => {
      this.setState({ done: value }, () => this.props.updateTask(this.state));
    }
  }

  handleDropdown(id) {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleDropdownClick(id)();
    }
  }

  handleAssigneeSelect(userId) {
    return (e) => {
      this.setState({ assignee_id: userId }, () => this.props.updateTask(this.state));
    }
  }

  handleAssigneeRemove(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ assignee_id: null }, () => this.props.updateTask(this.state));
  }

  ////////// Lifecycle Methods //////////

  componentDidUpdate(prevProps) {
    if (prevProps.task.id !== this.props.task.id) {
      this.setState(this.props.task)
    } else if (prevProps.task.name !== this.props.task.name) {
      this.setState({name: this.props.task.name});
    }
  }

  ////////// Sub Components -- Header //////////

  renderNameInput() {
    return (
      <textarea
        placeholder="Write a task name"
        className="task-name-detail-input"
        onChange={this.update("name")}
        value={this.state.name || ""}>
      </textarea>
    );
  }

  renderMarkComplete() {
    return (
      <button onClick={this.toggleDone(true)} className="mark-complete-button">
        <svg className="mark-complete-check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.5 75.5c-10-10-26.2-10-36.2 0L161.6 382.2 43.7 264.3c-10-10-26.2-10-36.2 0 -10 10-10 26.2 0 36.2l136 136c10 10 26.2 10 36.2 0L504.5 111.7C514.5 101.7 514.5 85.5 504.5 75.5z" /></svg>
        Mark Complete
      </button>
    );
  }

  renderCompleted() {
    return (
      <button onClick={this.toggleDone(false)} className="mark-complete-button completed">
        <svg className="mark-complete-check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.5 75.5c-10-10-26.2-10-36.2 0L161.6 382.2 43.7 264.3c-10-10-26.2-10-36.2 0 -10 10-10 26.2 0 36.2l136 136c10 10 26.2 10 36.2 0L504.5 111.7C514.5 101.7 514.5 85.5 504.5 75.5z" /></svg>
        Completed
      </button>
    );
  }

  renderToolbarDropdown() {
    return (
      <ul id="task-toolbar-dropdown" className="dropdown-content-task-toolbar">
        <li className="task-toolbar-dropdown-item" onClick={this.handleDeleteTask}>
          <div className="remove-task-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.4 486.4"><path d="M446 70H344.8V53.5c0-29.5-24-53.5-53.5-53.5h-96.2c-29.5 0-53.5 24-53.5 53.5V70H40.4c-7.5 0-13.5 6-13.5 13.5S32.9 97 40.4 97h24.4v317.2c0 39.8 32.4 72.2 72.2 72.2h212.4c39.8 0 72.2-32.4 72.2-72.2V97H446c7.5 0 13.5-6 13.5-13.5S453.5 70 446 70zM168.6 53.5c0-14.6 11.9-26.5 26.5-26.5h96.2c14.6 0 26.5 11.9 26.5 26.5V70H168.6V53.5zM394.6 414.2c0 24.9-20.3 45.2-45.2 45.2H137c-24.9 0-45.2-20.3-45.2-45.2V97h302.9v317.2H394.6z" /><path d="M243.2 411c7.5 0 13.5-6 13.5-13.5V158.9c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v238.5C229.7 404.9 235.7 411 243.2 411z" /><path d="M155.1 396.1c7.5 0 13.5-6 13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v208.9C141.6 390.1 147.7 396.1 155.1 396.1z" /><path d="M331.3 396.1c7.5 0 13.5-6 13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v208.9C317.8 390.1 323.8 396.1 331.3 396.1z" /></svg>
          </div>
          <span>Delete Task</span>
        </li>
      </ul>
    );
  }

  renderToolbar() {
    return (
      <header>
        <div className="task-form-toolbar">
          {(this.props.task.done) ? this.renderCompleted() : this.renderMarkComplete()}
          <div className="task-toolbar-right">
            <div id="task-toolbar-more-button" className="task-toolbar-button" onClick={this.handleDropdown("task-toolbar-dropdown")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="612" height="612" viewBox="0 0 612 612"><path d="M55.6 250.4C24.9 250.4 0 275.3 0 306c0 30.7 24.9 55.6 55.6 55.6S111.3 336.7 111.3 306C111.3 275.3 86.4 250.4 55.6 250.4zM315.3 250.4c-30.7 0-55.6 24.9-55.6 55.6 0 30.7 24.9 55.6 55.6 55.6 30.7 0 55.6-24.9 55.6-55.6C370.9 275.3 346 250.4 315.3 250.4zM556.4 250.4c-30.7 0-55.6 24.9-55.6 55.6 0 30.7 24.9 55.6 55.6 55.6C587.1 361.6 612 336.7 612 306 612 275.3 587.1 250.4 556.4 250.4z" /></svg>
            </div>
            {this.renderToolbarDropdown()}
            <div onClick={this.handleTaskClose} className="close-x">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.1 31.1"><polygon points="31.1 1.4 29.7 0 15.6 14.1 1.4 0 0 1.4 14.1 15.6 0 29.7 1.4 31.1 15.6 17 29.7 31.1 31.1 29.7 17 15.6 " /></svg>
            </div>
          </div>
        </div>
      </header>
    );
  }

  ////////// Sub Components -- Middle //////////

  renderCalendarSection() {
    let selectedDate;
    (this.state.due_date !== null) ? selectedDate = new Date(this.state.due_date) : selectedDate = null

    return (
      <div className="due-date-section">
        <DatePicker
          customInput={<DatePickerInput selectedDate={selectedDate} />}
          className="datepicker"
          selected={selectedDate}
          onChange={this.handleDueDate}
          defaultValue={null}
          isClearable={true}
        />
      </div>
    );
  }

  renderAssigneeDropdown() {
    const usersArray = Object.values(this.props.users)
    return (
      <ul id="assignee-dropdown" className="dropdown-content-assignee">
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

  renderAssigneeSection() {
    let assigneeInfo;
    let userIcon;
    let removeAssigneeButton;
    if (Number.isInteger(this.state.assignee_id) && Object.values(this.props.users).length > 1) {
      let user = this.props.users[this.state.assignee_id];
      assigneeInfo = (
        <div className="assigned-info">
          <span className="assigned-top-line">Assigned to</span><br></br>
          <span className="assigned-bottom-line">{user.fname} {user.lname}</span>
        </div>
      )
      userIcon = (
        <button key={user.id} className="user-circle-button">{user.initials}</button>
      )
      removeAssigneeButton = (
        <div className="remove-assignee-button" onClick={this.handleAssigneeRemove}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.9 21.9" xlink="http://www.w3.org/1999/xlink"><path d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z" /></svg>
        </div>
      )
    } else {
      assigneeInfo = <div>Unassigned</div>
      userIcon = (
        <div className="dashed-circle-icon">
          <svg viewBox="0 0 32 32">
            <path d="M16,18c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S20.4,18,16,18z M16,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S19.3,4,16,4z" />
            <path d="M29,32c-0.6,0-1-0.4-1-1v-4.2c0-2.6-2.2-4.8-4.8-4.8H8.8C6.2,22,4,24.2,4,26.8V31c0,0.6-0.4,1-1,1s-1-0.4-1-1v-4.2C2,23,5,20,8.8,20h14.4c3.7,0,6.8,3,6.8,6.8V31C30,31.6,29.6,32,29,32z" />
          </svg>
        </div>
      )
      removeAssigneeButton = <div></div>
    }


    return (      
      <div className='assignee-section'>
        <div className="assignee-button" onClick={this.handleDropdown("assignee-dropdown")}>
          {userIcon}
          {assigneeInfo}
          {removeAssigneeButton}
        </div>
        {this.renderAssigneeDropdown()}
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
          value={(this.state.description) ? this.state.description : ""}
          placeholder="Description"
        >
        </textarea>
      </div>
    );
  }

  ////////// Sub Components -- Bottom //////////

  renderProjectSection() {
    return (
      <div className="project-section">
        <svg height="511pt" viewBox="-64 0 511 511.9999" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m336.472656 64.035156h-47.996094v-16c0-8.835937-7.160156-16-15.996093-16h-34.734375c-8.820313-24.996094-36.238282-38.109375-61.234375-29.285156-13.6875 4.832031-24.457031 15.597656-29.289063 29.285156h-34.730468c-8.835938 0-16 7.164063-16 16v16h-47.996094c-26.507813 0-47.996094 21.488282-47.996094 47.996094v351.972656c0 26.507813 21.488281 47.996094 47.996094 47.996094h287.980468c26.507813 0 47.996094-21.488281 47.996094-47.996094v-351.972656c-.003906-26.507812-21.492187-47.996094-48-47.996094zm-207.984375 0h32c8.835938 0 16-7.164062 16-16 0-8.835937 7.160157-16 15.996094-16s16 7.164063 16 16c0 8.835938 7.164063 16 16 16h31.996094v31.996094h-127.992188zm223.984375 399.96875c0 8.835938-7.164062 16-16 16h-287.976562c-8.835938 0-16-7.164062-16-16v-351.972656c0-8.835938 7.164062-16 16-16h47.996094v16c0 8.835938 7.164062 15.996094 16 15.996094h159.988281c8.835937 0 15.996093-7.160156 15.996093-15.996094v-16h48c8.835938 0 15.996094 7.164062 15.996094 16zm0 0" /><path d="m288.476562 192.023438h-191.984374c-8.835938 0-16 7.164062-16 16 0 8.835937 7.164062 16 16 16h191.984374c8.835938 0 16-7.164063 16-16 0-8.835938-7.164062-16-16-16zm0 0" /><path d="m288.476562 288.015625h-191.984374c-8.835938 0-16 7.164063-16 16s7.164062 16 16 16h191.984374c8.835938 0 16-7.164063 16-16s-7.164062-16-16-16zm0 0" /><path d="m288.476562 384.011719h-191.984374c-8.835938 0-16 7.160156-16 15.996093 0 8.835938 7.164062 16 16 16h191.984374c8.835938 0 16-7.164062 16-16 0-8.835937-7.164062-15.996093-16-15.996093zm0 0" /></svg>
        <div className="belong-to-project-button">{this.props.project.name}</div>
      </div>
    );
  }

  renderTaskStorySection() {
    return (
      <div className="task-story-section">
        <div className="task-story">
          User created task. 11 days ago<br></br>
          User added task to {this.props.project.name}. 11 days ago
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
          <form className="task-form-box">
              {this.renderToolbar()}

            <div className="form-body">
              {this.renderNameInput()}

              <div className="assignee-due-date-row">
                {this.renderAssigneeSection()}
                {this.renderCalendarSection()}
              </div>

              {this.renderDescriptionSection()}
              {this.renderProjectSection()}
              {this.renderTaskStorySection()}

            </div>
          </form>
        </div>
      );
    }
  }
}

export default (TaskForm);