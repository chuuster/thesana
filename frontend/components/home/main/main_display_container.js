import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import MainDisplay from "./main_display";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};


export default withRouter(connect(mapStateToProps)(MainDisplay));