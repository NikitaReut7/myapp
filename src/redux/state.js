let renderEntireTree = () => {

}

let state = {
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
}
window.state = state;

export const addPost = () =>{
    let newPost={
        id:5,
        message:state.profilePage.newPostText,
        likesCount:0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree();
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree();
}

export const sendMessage = () => {
    let newMessage =
    {
        id:5,
        message: state.dialogsPage.newMessage
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessage='';
    renderEntireTree();
}

export const updateMessage = (newMessage) =>{
    state.dialogsPage.newMessage = newMessage;
    renderEntireTree();
}

export  const subscribe = (observer) =>{
    renderEntireTree = observer;
}

export default state;