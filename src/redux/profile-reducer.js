const _addPost = 'ADD-POST';
const _updateNewPostText = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hi, Nik!", likesCount: '15'},
        {id: 2, message: "How are you?", likesCount: '0'}
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case _addPost: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],
            }
        }
        case  _updateNewPostText: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default: {
            return state;
        }

    }
}

export const addPostActionCreator = () => ({
    type: _addPost
})

export const updateNewPostTextActionCreator = (text) => ({
    type: _updateNewPostText,
    newText: text
})

export default profileReducer;