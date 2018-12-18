import { connect } from "react-redux";
// import { withRouter } from 'react-router-dom';
import ProjectPage from "./project_page";
import {fetchProject} from "../../../../../actions/project_actions"

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    project: state.entities.projects[ownProps.match.params.projectId]
    // tasks: state.entities.tasks.
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id))
  };
};

export default (connect(mapStateToProps, mapDispatchToProps)(ProjectPage));

