import { connect } from "react-redux";
import { logout } from '../../../actions/session_actions';
import TopBarIndex from "./top_bar_index";

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBarIndex)