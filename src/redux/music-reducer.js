const REMOVE_SONG='REMOVE_SONG'
const SET_MUSIC = 'SET_MUSIC'

let initialState = {
    music:[]
}

const musicReducer = (state = initialState,action) =>{
    switch (action.type)
    {
        case REMOVE_SONG:{
            return {
                ...state,
                music: state.music.filter(m=>m.id !== action.songId)
            }
        }
        case SET_MUSIC:{
            return {
                ...state,
                music:[...state.music, ...action.music]
            }
        }
        default:
            return state;
    }

}

export const removeSongAC = (songId) =>({
    type:REMOVE_SONG,songId
});

export const setMusicAC = (music) =>({
    type:SET_MUSIC,music
});

export default musicReducer;