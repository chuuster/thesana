import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from '../../../../actions/session_actions';
import TopBarIndex from "./top_bar_index";
import { openModal } from '../../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => () => dispatch(openModal(modal))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBarIndex));