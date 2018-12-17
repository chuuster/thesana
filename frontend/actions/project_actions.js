import * as ProjectApiUtil from '../util/project_api_util';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";

////////// Action Creators //////////

const receiveProjects = (projects) => {
  return {
    type: RECEIVE_PROJECTS,
    projects
  };
};

const receiveProject = (project) => {
  return {
    type: RECEIVE_PROJECT,
    project
  };
};

const removeProject = (id) => {
  return {
    type: DELETE_PROJECT,
    projectId: id
  };
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};

////////// Thunk Action Creators //////////

export const fetchProjects = () => dispatch => {
  return (
    ProjectApiUtil.fetchProjects()
      .then((res) => dispatch(receiveProjects(res)))
  );
};

export const fetchProject = (id) => dispatch => {
  return (
    ProjectApiUtil.fetchProject(id)
      .then((res) => dispatch(receiveProject(res)))
      );
};

export const createProject = (project) => dispatch => {
  return (
    ProjectApiUtil.createProject(project)
      .then((res) => dispatch(receiveProject(res)), (errors) => (dispatch(receiveErrors(errors.responseJSON)))
      ));
};

export const updateProject = (project) => dispatch => {
  return (
    ProjectApiUtil.updateProject(project)
      .then((res) => dispatch(receiveProject(res)), (errors) => (dispatch(receiveErrors(errors.responseJSON)))
      ));
};

export const deleteProject = (id) => dispatch => {
  return ProjectApiUtil.deleteProject(id)
  .then((res) => dispatch(removeProject(res)));
};

