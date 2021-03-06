import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import newsReducer from "./news-reducer";
import musicReducer from "./music-reducer";




let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    newsPage:newsReducer,
    musicPage:musicReducer
});

let store = createStore(reducers);

export default store;