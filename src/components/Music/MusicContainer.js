import React from "react";
import {removeSongAC, setMusicAC} from "../../redux/music-reducer";
import {connect} from "react-redux";
import Music from "./Music";

let mapStateToProps = (state) => {
    return {
        music: state.musicPage.music
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        removeSong: (songId) => {
            dispatch(removeSongAC(songId))
        },
        setMusic: (music) => {
            dispatch(setMusicAC(music))
        }
    }
};

const MusicContainer = connect(mapStateToProps,mapDispatchToProps)(Music);

export default MusicContainer;