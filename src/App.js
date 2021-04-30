import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NewsContainer from "./components/News/NewsContainer";
import MusicContainer from "./components/Music/MusicContainer";

const App = () => {
    return (
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/users'} render={ () => <UsersContainer/> }/>
                    <Route path={'/profile'} render={ () => <Profile/> }/>
                    <Route path={'/dialogs'} render={ () => <DialogsContainer/> }/>
                    <Route path={'/music'} render={ () => <MusicContainer/> }/>
                    <Route path={'/news'} render={ () => <NewsContainer/>}/>
                    <Route path={'/setting'} component={Setting}/>
                </div>
            </div>
    );
}

export default App;
