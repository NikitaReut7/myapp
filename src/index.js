import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, sendMessage, subscribe, updateMessage, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 newPostText={state.profilePage.newPostText}
                 updateNewPostText={updateNewPostText}
                 sendMessage={sendMessage}
                 updateMessage={updateMessage}
                 newMessage = {state.dialogsPage.newMessage}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderEntireTree(state);

subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
