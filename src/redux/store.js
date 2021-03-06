import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        },
        sidebar:{}
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
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;