import * as SessionApiUtil from '../util/session_api_util';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = (currentUser) => {
  console.log(currentUser)
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const login = (user) => dispatch => {
  return (
    SessionApiUtil.login(user)
    .then((res) => dispatch(receiveCurrentUser(res)), (errors) => dispatch(receiveErrors(errors.responseJSON)))
  );
};

export const signup = (user) => dispatch => {
  return (
    SessionApiUtil.signup(user)
      .then((res) => dispatch(receiveCurrentUser(res)), (errors) => (dispatch(receiveErrors(errors.responseJSON)))
  ));
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then((res) => dispatch(logoutCurrentUser()));  
};

