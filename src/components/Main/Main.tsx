import React from 'react';
import Greeting from "./Greeting/Greeting";
import MainPhoto from "./MainPhoto/MainPhoto";
import s from "./Main.module.css"
import commonS from "../../common/styles/Common.module.css"

const Main = () => {
    return (
        <div className={`${commonS.outer_box} ${s.main_outer}`}>
            <section className={`${commonS.container} ${s.main_container}`}>
                <Greeting/>
                <MainPhoto/>
            </section>
        </div>
    )
}

export default Main