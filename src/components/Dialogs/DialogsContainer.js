import React from "react";
import {
  sendMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const onNewMessageChange = (message) => {
    props.store.dispatch(updateMessageTextActionCreator(message));
  };

  return (
    <Dialogs
      updateMessageText={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
