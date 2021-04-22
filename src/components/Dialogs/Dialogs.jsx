import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/state";


const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages
        .map(m => <Message message={m.message} id={m.id}/>);

    let newMessage = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let updateMessage = () => {
        let text = newMessage.current.value;
        props.dispatch(updateMessageActionCreator(text));
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className={classes.sendMessage}>
                <div >
                    <textarea ref={newMessage} onChange={updateMessage} value={props.dialogsPage.newMessage}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;