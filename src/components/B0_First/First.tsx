import * as React from "react";
import style from "./First.module.scss";
import mainMobile from "../../assets/png/B0_First/main-mobile.png";
import mainDesktop from "../../assets/png/B0_First/main-desktop.png";
import cucumber0 from "../../assets/png/B0_First/cucumber_0.png";
import cucumber1 from "../../assets/png/B0_First/cucumber_1.png";
import group from "../../assets/png/B0_First/cucumbers.png";

export const First = () => {
    return (
        <div className={style.first}>

            <img src={mainMobile} alt="" className={style.mainMobile}/>
            <img src={mainDesktop} alt="" className={style.mainDesktop}/>

            <img src={cucumber0} alt="" className={style.cucumber0}/>
            <img src={cucumber1} alt="" className={style.cucumber1}/>
            <img src={group} alt="" className={style.group}/>


            <p className={style.subtitle}>
                [ get it pickle rick...]
            </p>

            <p className={style.label}>
                $Rick Coin
            </p>

            <p className={style.text}>
                The No1 Vote to Earn Crypto
            </p>

        </div>
    )
}
