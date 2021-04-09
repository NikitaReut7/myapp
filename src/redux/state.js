import {renderEntireTree} from "../render";


let state = {
    profilePage:{
        posts:[
            {id: 1, message: "Hi, Nik!", likesCount:'15'},
            {id: 2, message: "How are you?", likesCount:'0'}
        ],
        newPostText : "itcan"
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "I'm fine thank you!"},
            {id: 4, message: "Ok."}
        ],
        dialogs: [
            {id: 1, name: "Ivan"},
            {id: 2, name: "Nik"},
            {id: 3, name: "Tom"},
            {id: 4, name: "Jon"}
        ]
    }
}
window.state = state;

export let addPost = () =>{
    let newPost={
        id:5,
        message:state.profilePage.newPostText,
        likesCount:0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export let sendMessage = () => {
    let newMessage =
    {
        id:5,
        message: "O, shit"
    };

    state.dialogsPage.messages.push(newMessage);
    renderEntireTree(state);
}

export default state;