import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewProjectFormContainer from './project_forms/new_project_form_container';
import EditProjectFormContainer from './project_forms/edit_project_form_container';
import DeleteProjectFormContainer from './project_forms/delete_project_form_container';

export const CREATE_PROJECT = "CREATE_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleModalClose() {
    this.props.clearErrors();
    this.props.closeModal();
  }

  render() {
    if (!this.props.purpose) {
      return null;
    }

    let component;
    switch (this.props.purpose) {
      case CREATE_PROJECT:
        component = <NewProjectFormContainer />;
        break;
      case UPDATE_PROJECT:
        component = <EditProjectFormContainer />;
        break;
      case REMOVE_PROJECT:
        component = <DeleteProjectFormContainer />;
        break;
      default:
        return null;
    }
  
    return (
      <div className="modal-background" >
        <div className="modal-child" onClick={this.handleModalClose}>
          <div className="modal-component" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    purpose: state.ui.modal.purpose,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));