import React from "react";
import classes from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/image/user.png'

let Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
            debugger;
            props.setUsers(response.data.items);
        })


    }

    return (
        <div className={classes.users}>
            {
                props.users.map(u => <div className={classes.user} key={u.id}>
                <span>
                    <div>
                        <img className={classes.userPhoto} src={u.photos.small != null
                                                                    ? u.photos.small
                                                                    : userPhoto
                        }/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        {/*<div>{u.location.country}</div>*/}
                        {/*<div>{u.location.city}</div>*/}
                    </span>
                </span>
                </div>)
            }
        </div>
    )
};

export default Users;