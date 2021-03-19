let state = {
    profilePage:{
        posts:[
            {id: 1, message: "Hi, Nik!", likesCount:'15'},
            {id: 2, message: "How are you?", likesCount:'0'}
        ]
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

export default state;