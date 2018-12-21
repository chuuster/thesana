import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import TaskForm from "./task_form";
import { updateTask, fetchTask, deleteTask } from "../../../../../actions/task_actions";
import { fetchProject } from "../../../../../actions/project_actions";

const mapStateToProps = (state, ownProps) => {
  const defaultTask = {
    id: "",
    name: "",
    description: "",
    creator_id: "",
    assignee_id: "",
    due_date: null,
    done: false
  };
  
  let task;
  let project;

  task = state.entities.tasks[ownProps.match.params.taskId] || defaultTask;
  project = state.entities.projects[task.project_id] || {id: "", name: ""};

  return {
    currentUser: state.entities.users[state.session.id],
    task: task,
    users: state.entities.users,
    project: project
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    fetchTask: (id) => dispatch(fetchTask(id)),
    updateTask: (task) => dispatch(updateTask(task)),
    deleteTask: (id) => dispatch(deleteTask(id))
  };
};

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(TaskForm)));

