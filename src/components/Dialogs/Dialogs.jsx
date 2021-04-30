import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages
        .map(m => <Message key={m.id} message={m.message} id={m.id}/>);

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onUpdateMessage = (event) => {
        let text = event.target.value;
        props.updateMessage(text);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.sendMessage}>
                    <div >
                        <textarea onChange={onUpdateMessage}
                                  value={props.dialogsPage.newMessage}
                                  placeholder={'Write a message...'}/>
                    </div>
                    <div>
                        <button onClick={onSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;