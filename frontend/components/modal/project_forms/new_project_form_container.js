import { connect } from 'react-redux';
import { createProject } from '../../../actions/project_actions';
import { closeModal } from '../../../actions/modal_actions';
import { clearErrors } from '../../../actions/session_actions';
import ProjectForm from './project_form';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ errors }) => {
  return {
    project: {name: "", description: ""},
    errors: errors.projects,
    formType: 'Create Project',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (project) => dispatch(createProject(project)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectForm));