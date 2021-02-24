import React from "react";
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={`${classes.dialog} ${classes.active}`}>
                    Nikita
                </div>
                <div className={classes.dialog}>
                    Ivan
                </div>
                <div className={classes.dialog}>
                    Nastya
                </div>
                <div className={classes.dialog}>
                    Jordan
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