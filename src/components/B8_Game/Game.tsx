import * as React from "react";
import style from "./Game.module.scss";
import card from "../../assets/png/B8_Game/card.png";
import {svgIcons} from "../../assets/svgIcons";
import group from "../../assets/png/B3_About/group.png";

export const Game = () => {
    return (
        <div className={style.game}>

            {/*<img src={group} alt="" className={style.mobile1}/>*/}
            {/*<img src={group} alt="" className={style.mobile2}/>*/}
            <img src={group} alt="" className={style.desktop}/>

            <h2 className={style.title}>The game</h2>

            <div className={style.card}>
                <img src={card} alt=""/>
                {svgIcons.game}
            </div>
        </div>
    )
}
