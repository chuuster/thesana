import { connect } from 'react-redux';
import { fetchProject, updateProject } from '../../../actions/project_actions';
import { clearErrors } from '../../../actions/session_actions';
import { closeModal } from '../../../actions/modal_actions';
import ProjectForm from './project_form';
import { withRouter } from 'react-router-dom';
import React from 'react';

const mapStateToProps = (state) => {
  return {
    project: state.entities.projects[state.ui.modal.projectId],
    errors: state.errors.projects,
    formType: 'Update Project',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)), 
    processForm: (project) => dispatch(updateProject(project)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

class EditProjectForm extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.project.id);
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.post.id != this.props.match.params.postId) {
  //     this.props.fetchPost(this.props.match.params.postId);
  //   }
  // }

  // shouldComponentUpdate() {

  // }

  render() {
    const { processForm, closeModal, formType, project, errors, clearErrors } = this.props;
    return (
      <ProjectForm
        errors={errors}
        closeModal={closeModal}
        processForm={processForm}
        formType={formType}
        clearErrors={clearErrors}
        project={project} />
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProjectForm));