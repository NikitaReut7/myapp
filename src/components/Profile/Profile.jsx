import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return(
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.profilePage.posts}/>
        </div>
    );
}

export default  Profile;