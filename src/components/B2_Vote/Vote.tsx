import * as React from "react";
import style from "./Vote.module.scss";
import mainMobile from "../../assets/png/B2_Vote/mainMobile.png";
import mainDesktop from "../../assets/png/B2_Vote/mainDesktop.png";
import groupMobile from "../../assets/png/B2_Vote/group_mobile.png";
import groupDesktop from "../../assets/png/B2_Vote/group_desktop.png";
import {SocialLinks} from "../common/SocialLinks/SocialLinks";

export const Vote = () => {
    return (
        <div className={style.vote}>

            <h2 className={style.title}>
                vote for a chance to win $20.000
            </h2>

            <img src={mainMobile} alt="" className={style.mainMobile}/>
            <img src={mainDesktop} alt="" className={style.mainDesktop}/>

            <img src={groupMobile} alt="" className={style.groupMobile}/>
            <img src={groupDesktop} alt="" className={style.groupDesktop}/>


           <p className={style.text}>
               Vote in the first ever pick or rick poll for a chance to win $20,000
           </p>

            <button className={style.voteBtn}>
                <p>free vote</p>
            </button>

            <div className={style.btns}>
                <button className={style.btn}>
                    <p>Whitepaper</p>
                </button>

                <button className={style.btn}>
                    <p>Audit</p>
                </button>
            </div>

            <SocialLinks  className={style.socialLinks}/>

        </div>
    )
}
