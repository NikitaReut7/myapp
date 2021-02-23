import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts.jsx";

const Profile = () =>{
    return(
        <div className={classes.content}>
            <div>

                <img src={'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'}/>

                Main content
            </div>
            <div>
                {/*<img src={'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'}/>*/}
            </div>
            <MyPosts/>
        </div>
    );
}

export default  Profile;