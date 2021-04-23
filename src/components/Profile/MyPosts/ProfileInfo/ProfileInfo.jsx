import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
{/*            <div>
                <img src={'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'}/>
            </div>*/}
            <div className={classes.descriptionBlock}>
                <div className={classes.userPhoto}>
                    {<img src={'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'}/>}
                </div>
                <div>Pavel Levenkov</div>
            </div>
            <div className={classes.userInfo}>
                <p>Разработчик</p>
                <p>.NET</p>
                <p>React</p>
                <p>T-SQL</p>
            </div>
        </div>
    );
}

export default ProfileInfo;