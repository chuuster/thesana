import React from 'react';

class DeleteProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id) {
    return (e) => {
      e.preventDefault();
      this.props.history.push("/");
      this.props.processForm(id).then(() => this.props.closeModal());
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="project-form-container">
        <form onSubmit={this.handleSubmit(this.props.project.id)} className="project-form-box">
          <header>
            <div className="form-header">
              <span>Delete the "{this.props.project.name}" project?</span>
              <div onClick={this.props.closeModal} className="close-x">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.1 31.1"><polygon points="31.1 1.4 29.7 0 15.6 14.1 1.4 0 0 1.4 14.1 15.6 0 29.7 1.4 31.1 15.6 17 29.7 31.1 31.1 29.7 17 15.6 " /></svg>
              </div>
            </div>
          </header>

          <div className="form-body">
            <span className="delete-message">
            This will delete the project and all tasks associated with this project.
            </span>

            <div className="process-form-button-row">
              <button onClick={this.props.closeModal} className="cancel-form-button" type="submit">Cancel</button>
              <input className="confirm-delete-button" type="submit" value="Delete Project" />
            </div>
          </div>


        </form>
      </div>
    );
  }
}

export default DeleteProjectForm;