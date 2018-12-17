import { OPEN_MODAL, CLOSE_MODAL } from '../../../actions/modal_actions';

export default function modalReducer(state = { purpose: null, projectId: null }, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return {purpose: null, projectId: null};
    default:
      return state;
  }
}