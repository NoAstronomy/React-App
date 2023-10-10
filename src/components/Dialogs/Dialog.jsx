import React from "react";
import dialogsModule from './Dialog.module.css';
import { NavLink } from "react-router-dom";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";

const DialogItem = (props) => {
    let path = '/messages/' + `${props.route}`

    return (
        <div className={dialogsModule.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={dialogsModule.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {

    let state = props.store.getState().dialogsGroup;
    let dialogsElements = state.dialogs.map(x => <DialogItem route={x.id} name={x.name} />);
    let messagesElements = state.messages.map(x => <Message message={x.name} />);

    let messageText = state.inputFieldMessage; 
    let onSendMessageClick = () => {
        debugger;
        props.store.dispatch(addMessageActionCreator());
    }

    let changeTextMessage = (event) => {
        debugger;
        let message = event.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(message));
    }

    return (
        <div className={dialogsModule.dialogs}>
            <div className={dialogsModule.dialogItems}>
                {dialogsElements}
            </div>
            <div className={dialogsModule.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        onChange={changeTextMessage}
                        placeholder="Enter your message..."></textarea></div>
                </div><button onClick={onSendMessageClick}>Send Message</button></div>
            <div>
            </div>
        </div>)
}

export default Dialogs;