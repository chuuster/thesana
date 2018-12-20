import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import TaskForm from "./task_form";
import { updateTask, fetchTask } from "../../../../../actions/task_actions";

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

  return {
    currentUser: state.entities.users[state.session.id],
    task: state.entities.tasks[ownProps.match.params.taskId] || defaultTask,
    users: Object.values(state.entities.users)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTask: (id) => dispatch(fetchTask(id)),
    updateTask: (task) => dispatch(updateTask(task))
  };
};

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(TaskForm)));

