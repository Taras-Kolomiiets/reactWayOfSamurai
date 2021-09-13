import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageBody = state.newMessageText;

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageChange = (event) => {
    let message = event.target.value;
    props.updateMessageText(message);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={s.messages}>{messagesElements}</div>
        <div>
          <textarea
            onChange={onNewMessageChange}
            value={newMessageBody}
            placeholder="Enter your message"
          />
        </div>
        <div>
          <button onClick={onSendMessageClick}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
