import React from 'react';
import style from "./App.module.scss";
import {First} from "../B0_First/First";
import {Timer} from "../B1_Timer/Timer";
import {Vote} from "../B2_Vote/Vote";
import {AboutUs} from "../B3_AboutUs/AboutUs";
import {Market} from "../B4_Market/Market";
import {Video} from "../B5_Video/Video";
import {Tokenomics} from "../B6_Tokenomics/Tokenomics";
import {Plan} from "../B7_Plan/Plan";
import {Game} from "../B8_Game/Game";
import {Footer} from "../A1_Footer/Footer";

export const App = () => {
    return (
        <div className={style.app}>
            <First/>
            <Timer/>
            <Vote/>
            <AboutUs/>
            <Market/>
            <Video/>
            <Tokenomics/>
            <Plan/>
            <Game/>
            <Footer/>
        </div>
    );
}

