import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions"
import SessionForm from "./session_form";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: "Log In"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)