import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  ////////// Click/Input Handlers //////////

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
    // return (e) => {
    //   if (e.keyCode === 13) {
    //     this.handleSubmit(e);
    //   } else {     
    //     this.setState({
    //       [field]: e.currentTarget.value
    //     });
    //   };
    // }
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, this.state);
    this.props.processForm(project).then(this.props.closeModal);
  }

  handleModalClose(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.closeModal();
    this.props.clearErrors();
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


  ////////// Sub Components //////////

  renderErrors() {
    if (this.props.errors.length === 0) {
      return null;
    } else {
      return (
        <div className="project-error-container">
          <span className="project-error-content">Project Name can't be blank.</span>
        </div>
      );
    }
  }

  ////////// Main Render //////////

  render() {
    return (
      <div className="project-form-container">
        <form onSubmit={this.handleSubmit} className="project-form-box">
          <header>
            <div className="form-header">
              <span>{(this.props.formType === "Create Project") ? "New Project" : "Edit Project"}</span>
              <div onClick={this.handleModalClose} className="close-x">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.1 31.1"><polygon points="31.1 1.4 29.7 0 15.6 14.1 1.4 0 0 1.4 14.1 15.6 0 29.7 1.4 31.1 15.6 17 29.7 31.1 31.1 29.7 17 15.6 " /></svg>
              </div>
            </div>
          </header>

          {this.renderErrors()}

          <div className="form-body">
            <label>Name </label>
            <input className="form-body-input" type="text"
              value={this.state.name}
              onChange={this.update('name')}
              className="project-input"
            />
            
            <br></br>
            <label>Description </label>
            <textarea 
              value={this.state.description}
              onChange={this.update('description')}
              className="project-textarea"
            >
            </textarea>
            

            <div className="process-form-button-row">
              <button onClick={this.handleModalClose} className="cancel-form-button" type="submit">Cancel</button>
              <input className="process-form-button" type="submit" value={this.props.formType} />
            </div>
          </div>


        </form>
      </div>
    );
  }
}

export default (ProjectForm);