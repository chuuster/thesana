import { connect } from 'react-redux';
import { deleteProject } from '../../../actions/project_actions';
import { closeModal } from '../../../actions/modal_actions';
import DeleteProjectForm from "./delete_project_form";
import { withRouter } from 'react-router-dom'; 

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.entities.projects[state.ui.modal.projectId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (id) => dispatch(deleteProject(id)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(DeleteProjectForm)));