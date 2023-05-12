import * as React from "react";
import style from "./Market.module.scss";
import pyramid from "../../assets/png/B4_Market/pyramid.png";
import ufo from "../../assets/png/B4_Market/ufo.png";
import group from "../../assets/png/B3_About/group.png";

const text0 = "Its all about the marketcap Morty! The more holders we get the higher the marketcap, thats how we get rich!";
const text1 = "Were launching on $250k MCAP that means everytime $250k comes in were already up 100% meme coins are 10xing within 1 week of launch its all about finding a good one early, were gonna make pepe look like a shitcoin if we get this right!";

export const Market = () => {
    return (
        <div className={style.market}>
            <h2 className={style.title}>Market Cap </h2>

            <img src={pyramid} alt="" className={style.pyramid}/>
            <img src={ufo} alt="" className={style.ufo}/>

            {/*<img src={group} alt="" className={style.mobile1}/>*/}
            <img src={group} alt="" className={style.mobile2}/>
            <img src={group} alt="" className={style.desktop}/>

            <div className={style.items}>
                {
                    ["$ 10 m", "$ 1 m", "$ 250 k"].map((el, key) => (
                        <p key={key} className={style.item}>{el}</p>
                    ))
                }
            </div>

            <p className={style.text0}>{text0}</p>
            <p className={style.text1}>{text1}</p>
        </div>
    )
}
