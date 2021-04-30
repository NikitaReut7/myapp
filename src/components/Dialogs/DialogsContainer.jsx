import React from "react";
import {sendMessageCreator, updateMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage
    };
}

let mapDispatchToProps = (dispatch) => {
    return  {
        sendMessage:() => {
            dispatch(sendMessageCreator())},
        updateMessage:(text) => {
            dispatch(updateMessageCreator(text))}

    };
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;