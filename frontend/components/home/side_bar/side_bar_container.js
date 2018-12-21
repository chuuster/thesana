import { connect } from "react-redux";
import { logout } from '../../../actions/session_actions';
import { withRouter } from "react-router-dom";
import SideBarIndex from "./side_bar_index";
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    projects: Object.values(state.entities.projects),
    users: Object.values(state.entities.users) 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal, projectId) => () => dispatch(openModal(modal, projectId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBarIndex))