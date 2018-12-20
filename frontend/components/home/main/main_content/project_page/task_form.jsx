import React from 'react';
import DatePicker from "react-datepicker";
import DatePickerInput from "./datepicker.jsx";
import UserPicker from "./userpicker";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;
    this.handleTaskClose = this.handleTaskClose.bind(this);
    this.handleDueDate = this.handleDueDate.bind(this);
  }

  ////////// Click/Input Handlers //////////

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value }, () => this.props.updateTask(this.state));
    }
  }

  handleDueDate(date) {
    this.setState({ due_date: date }, () => this.props.updateTask(this.state));
  }

  handleTaskClose() {
    this.props.history.push(`/projects/${this.props.match.params.projectId}`);
  }

  toggleDone(value) {
    return (e) => {
      this.setState({ done: value }, () => this.props.updateTask(this.state));
    }
  }

  ////////// Lifecycle Methods //////////

  componentDidUpdate(prevProps) {
    if (prevProps.task.id !== this.props.task.id) {
      this.setState(this.props.task)
    }
  }

  ////////// Sub Components -- Header //////////

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

  renderToolbar() {
    return (
      <header>
        <div className="task-form-toolbar">
          {(this.props.task.done) ? this.renderCompleted() : this.renderMarkComplete()}
          <div onClick={this.handleTaskClose} className="close-x">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.1 31.1"><polygon points="31.1 1.4 29.7 0 15.6 14.1 1.4 0 0 1.4 14.1 15.6 0 29.7 1.4 31.1 15.6 17 29.7 31.1 31.1 29.7 17 15.6 " /></svg>
          </div>
        </div>
      </header>
    );
  }

  ////////// Sub Components -- Middle //////////

  renderCalendarSection() {
    return (
      <div className="due-date-section">
        {this.renderDatePicker()}
      </div>
    );
  }

  renderDatePicker() {
    let selectedDate;
    (this.state.due_date !== null) ? selectedDate = new Date(this.state.due_date) : selectedDate = null
    
    return (
      <DatePicker
        customInput={<DatePickerInput selectedDate={selectedDate}/>}
        className="datepicker"
        selected={selectedDate}
        onChange={this.handleDueDate}
        defaultValue={null}
        isClearable={true}
      />
    );
  }

  renderAssigneeSection() {
    return (      
      <UserPicker users={this.props.users}/>
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