import { connect } from "react-redux";
import { logout } from '../../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import MainDisplay from "./main_display";

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainDisplay));