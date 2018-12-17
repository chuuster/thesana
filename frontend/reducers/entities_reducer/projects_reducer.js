import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  DELETE_PROJECT
} from '../../actions/project_actions';
import merge from 'lodash/merge';

const projectsReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      const newProject = { [action.project.id]: action.project }
      return merge({}, oldState, newProject);
    case DELETE_PROJECT:
      let newState = merge({}, oldState);
      delete newState[action.projectId];
      return newState;
    default:
      return oldState;
  }
};

export default projectsReducer;
