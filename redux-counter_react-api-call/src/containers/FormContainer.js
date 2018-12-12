import { connect } from "react-redux";
import { incrementAction, decrementAction } from "../actions/counterActions";

import Form from "../components/Form";

function mapDispatchToProps(dispatch) {
  return {
    increment: () => {
      dispatch(incrementAction());
    },
    decrement: () => {
      dispatch(decrementAction());
    }
  };
}
const FormContainer = connect(
  null,
  mapDispatchToProps
)(Form);

export default FormContainer;
