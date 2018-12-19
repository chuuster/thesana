import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import TaskForm from "./task_form";
import { updateTask, fetchTask } from "../../../../../actions/task_actions";

const mapStateToProps = (state, ownProps) => {
  const defaultTask = {
    id: "",
    name: "",
    description: "",
    creatorId: "",
    assigneeId: "",
    dueDate: ""
  };

  return {
    currentUser: state.entities.users[state.session.id],
    task: state.entities.tasks[ownProps.match.params.taskId] || defaultTask
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTask: (id) => dispatch(fetchTask(id)),
    updateTask: (task) => dispatch(updateTask(task))
  };
};

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(TaskForm)));

