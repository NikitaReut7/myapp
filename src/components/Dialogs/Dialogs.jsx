import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateMessageCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogsPage = props.store.getState().dialogsPage;

    let dialogsElements = dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = dialogsPage.messages
        .map(m => <Message message={m.message} id={m.id}/>);

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let updateMessage = (event) => {
        let text = event.target.value;
        props.store.dispatch(updateMessageCreator(text));
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
                        <textarea onChange={updateMessage}
                                  value={dialogsPage.newMessage}
                                  placeholder={'Write a message...'}/>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;