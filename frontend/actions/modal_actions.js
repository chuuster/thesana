export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (purpose, projectId=null) => {
  return {
    type: OPEN_MODAL,
    modal: {purpose: purpose, projectId: projectId}
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};