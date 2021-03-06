import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import MainContent from "./main_content";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};


export default withRouter(connect(mapStateToProps)(MainContent));