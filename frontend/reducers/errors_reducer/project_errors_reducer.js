import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  RECEIVE_ERRORS
} from '../../actions/project_actions';
import { CLEAR_ERRORS } from '../../actions/session_actions';

const projectErrorsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return [];
    case RECEIVE_PROJECT:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default projectErrorsReducer;
