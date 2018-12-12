import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions"
import SessionForm from "./session_form";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: "Sign Up"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)