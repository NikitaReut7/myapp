import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={`${classes.dialog} ${classes.active}`}>
                    <NavLink to={"/dialogs/1"}>Nikita</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={"/dialogs/2"}>Ivan</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={"/dialogs/3"}>Nastya</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={"/dialogs/4"}>Jordan</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>>How are you?</div>
                <div className={classes.message}>I'm fine, thank you!</div>
            </div>
        </div>
    );
}

export default Dialogs;