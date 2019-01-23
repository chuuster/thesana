import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import ProjectPage from "./project_page";
import { updateTask, createTask, fetchTasks } from "../../../../../actions/task_actions";
import { fetchProject } from "../../../../../actions/project_actions";

const mapStateToProps = (state, ownProps) => {
  let project;
  let tasks;

  if (Object.keys(state.entities.projects).length !== 0) {
    project = state.entities.projects[ownProps.match.params.projectId]
  } else {
    project = {};
  }

  if (Object.keys(state.entities.tasks).length !== 0 && Object.keys(project).length !== 0) {
    tasks = [];

    project.taskIds.sort().forEach(id => {
      if (state.entities.tasks[id]){

          tasks.push(state.entities.tasks[id]);

      }
    });
  } else {
    tasks = [];
  }

  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    project,
    tasks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    fetchTasks: () => dispatch(fetchTasks()),
    createTask: (task) => dispatch(createTask(task)),
    updateTask: (task) => dispatch(updateTask(task))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectPage));

