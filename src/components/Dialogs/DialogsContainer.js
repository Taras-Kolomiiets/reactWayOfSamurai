import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  sendMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const authRedirectComponent = withAuthRedirect(Dialogs);

const mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessageText: (message) => {
      dispatch(updateMessageTextActionCreator(message));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(authRedirectComponent);

export default DialogsContainer;
