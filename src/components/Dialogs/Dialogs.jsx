import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogData =[
        {id: 1, name: "Ivan"},
        {id: 2, name: "Nik"},
        {id: 3, name: "Tom"},
        {id: 4, name: "Jon"}
    ];

    let messageData =[
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I'm fine thank you!"},
        {id: 4, message: "Ok."}
    ];

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <Dialog name={dialogData[0].name} id={dialogData[0].id}/>
                <Dialog name={dialogData[1].name} id={dialogData[1].id}/>
                <Dialog name={dialogData[2].name} id={dialogData[2].id}/>
                <Dialog name={dialogData[3].name} id={dialogData[3].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
            </div>
        </div>
    );
}

export default Dialogs;