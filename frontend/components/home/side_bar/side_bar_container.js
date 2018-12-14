import { connect } from "react-redux";
import { logout } from '../../../actions/session_actions';
import { withRouter } from "react-router-dom";
import SideBarIndex from "./side_bar_index";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBarIndex))