import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import HomePage from "./home_page";
import { fetchProjects } from "../../../../../actions/project_actions";
import { openModal } from '../../../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    projects: Object.values(state.entities.projects)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    openModal: (modal, projectId) =>  () => dispatch(openModal(modal, projectId))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));