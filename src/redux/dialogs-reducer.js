const _sendMessage = 'SEND-MESSAGE';
const _updateMessage = 'UPDATE-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I'm fine thank you!"},
        {id: 4, message: "Ok."}
    ],
    newMessage:"",
    dialogs: [
        {id: 1, name: "Ivan"},
        {id: 2, name: "Nik"},
        {id: 3, name: "Tom"},
        {id: 4, name: "Jon"}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case _sendMessage:
            let newMessage =
                {
                    id: 5,
                    message: state.newMessage
                };

            state.messages.push(newMessage);
            state.newMessage = '';
            return state;
        case _updateMessage:
            state.newMessage = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({
    type:_sendMessage
})

export const updateMessageCreator = (message) =>({
    type:_updateMessage,
    newMessage:message
})

export default dialogsReducer;