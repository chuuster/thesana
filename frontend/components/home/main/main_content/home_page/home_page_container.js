import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import HomePage from "./home_page";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

export default withRouter(connect(mapStateToProps)(HomePage));