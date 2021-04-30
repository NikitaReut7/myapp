import React from "react";
import classes from './Music.module.css';

const Music = (props) => {
    if(props.music.length === 0)
    {
        props.setMusic([
            {
                id: 1,
                author: "1kla$$",
                songName: 'У меня своя дорога',
            },
            {
                id: 2,
                author:'Макс Корж',
                songName: "Малый повзрослел",
            },
            {
                id: 3,
                author:'BONES',
                songName: "TakingOutTheTrash",
            },
            {
                id: 4,
                author:'Егор Шип',
                songName: "Dior",
            }
        ])
    }

    return (
        <div>
            {
                props.music.map(m=> <div className={classes.musicContainer} key={m.id}>
                    <div className={classes.song}>
                        <div className={classes.songInfo}>
                            <span>{m.author}</span>
                            <span> - </span>
                            <span>{m.songName}</span>
                        </div>
                        <div className={classes.removeSong}>
                            <button onClick={()=>{props.removeSong(m.id)}}>x</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Music;