const _addPost = 'ADD-POST';
const _updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const _sendMessage = 'SEND-MESSAGE';
const _updateMessage = 'UPDATE-MESSAGE';

let store = {
    _state: {
        profilePage:{
            posts:[
                {id: 1, message: "Hi, Nik!", likesCount:'15'},
                {id: 2, message: "How are you?", likesCount:'0'}
            ],
            newPostText : ""
        },
        dialogsPage: {
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
    },
    _callSubscriber () {
    },

    getState () {
        return this._state;
    },
    subscribe  (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        if (action.type===_addPost)
        {
            let newPost={
                id:5,
                message: this._state.profilePage.newPostText,
                likesCount:0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if(action.type===_updateNewPostText)
        {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if(action.type===_sendMessage)
        {
            let newMessage =
                {
                    id:5,
                    message: this._state.dialogsPage.newMessage
                };

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessage='';
            this._callSubscriber(this._state);
        }
        else if(action.type===_updateMessage)
        {
            this._state.dialogsPage.newMessage = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}


export const addPostActionCreator = () => ({
    type: _addPost
})

export const updateNewPostTextActionCreator = (text) => ({
    type: _updateNewPostText,
    newText:text
})

export const sendMessageActionCreator = () => ({
    type:_sendMessage
})

export const updateMessageActionCreator = (message) =>({
    type:_updateMessage,
    newMessage:message
})


export default store;
window.store = store;