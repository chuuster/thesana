import { connect } from 'react-redux';
import { deleteProject } from '../../../actions/project_actions';
import { closeModal } from '../../../actions/modal_actions';
import DeleteProjectForm from "./delete_project_form";


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

export default (connect(mapStateToProps, mapDispatchToProps)(DeleteProjectForm));