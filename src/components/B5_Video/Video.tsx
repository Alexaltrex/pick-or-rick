import * as React from "react";
import style from "./Video.module.scss";
import video from "../../assets/png/B5_Video/video.png";
import {svgIcons} from "../../assets/svgIcons";
import group from "../../assets/png/B3_About/group.png";

const text = "The King of all meme coins backed by the biggest degens in the world... Rick & Morty community!";

export const Video = () => {
    return (
        <div className={style.video}>

            <img src={group} alt="" className={style.mobile}/>
            <img src={group} alt="" className={style.desktop}/>

            <div className={style.videoWrapper}>
                <img src={video} alt="" className={style.preview}/>
                <button className={style.btn}>
                    {svgIcons.play}
                </button>

            </div>

            <p className={style.text}>{text}</p>
        </div>
    )
}
