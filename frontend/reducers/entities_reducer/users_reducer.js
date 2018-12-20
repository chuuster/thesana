import { RECEIVE_CURRENT_USER, RECEIVE_TEAM_MEMBERS } from '../../actions/session_actions';
import merge from 'lodash/merge';

const usersReducer = (oldState = {id: null}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { [action.currentUser.id]: action.currentUser })
    case RECEIVE_TEAM_MEMBERS:
      return action.teamMembers
    default: 
      return oldState;
  }
};

export default usersReducer;