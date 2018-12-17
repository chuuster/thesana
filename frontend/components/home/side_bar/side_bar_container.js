import { connect } from "react-redux";
import { logout } from '../../../actions/session_actions';
import { withRouter } from "react-router-dom";
import SideBarIndex from "./side_bar_index";
// import { fetchProjects } from "../../../actions/project_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    projects: Object.values(state.entities.projects)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    // fetchProjects: () => dispatch(fetchProjects())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBarIndex))