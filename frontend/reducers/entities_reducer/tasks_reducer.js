import {
  RECEIVE_TASKS,
  RECEIVE_TASK,
  DELETE_TASK
} from '../../actions/task_actions';
import merge from 'lodash/merge';

const tasksReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks;
    case RECEIVE_TASK:
      const newTask = { [action.task.id]: action.task }
      return merge({}, oldState, newTask);
    case DELETE_TASK:
      let newState = merge({}, oldState);
      delete newState[action.taskId];
      return newState;
    default:
      return oldState;
  }
};

export default tasksReducer;
