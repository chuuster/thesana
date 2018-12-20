import * as TaskApiUtil from '../util/task_api_util';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const DELETE_TASK = "DELETE_TASK";

////////// Action Creators //////////

const receiveTasks = (tasks) => {
  return {
    type: RECEIVE_TASKS,
    tasks
  };
};

const receiveTask = (task) => {
  return {
    type: RECEIVE_TASK,
    task
  };
};

const removeTask = (id) => {
  return {
    type: DELETE_TASK,
    taskId: id
  };
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};

////////// Thunk Action Creators //////////

export const fetchTasks = () => dispatch => {
  return (
    TaskApiUtil.fetchTasks()
      .then((res) => dispatch(receiveTasks(res)))
  );
};

export const fetchTask = (id) => dispatch => {
  return (
    TaskApiUtil.fetchTask(id)
      .then((res) => dispatch(receiveTask(res)))
      );
};

export const createTask = (task) => dispatch => {
  return (
    TaskApiUtil.createTask(task)
      .then((res) => dispatch(receiveTask(res)), (errors) => (dispatch(receiveErrors(errors.responseJSON)))
      ));
};

export const updateTask = (task) => dispatch => {
  return (
    TaskApiUtil.updateTask(task)
      .then((res) => dispatch(receiveTask(res)), (errors) => (dispatch(receiveErrors(errors.responseJSON)))
      ));
};

export const deleteTask = (id) => dispatch => {
  return TaskApiUtil.deleteTask(id)
  .then((res) => dispatch(removeTask(res)));
};

