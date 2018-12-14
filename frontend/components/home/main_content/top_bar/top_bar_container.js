import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from '../../../../actions/session_actions';
// import { userInitials } from '../../../../../app/assets/javascripts/application';
import TopBarIndex from "./top_bar_index";

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
    // userInitials: () => userInitials()
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBarIndex));