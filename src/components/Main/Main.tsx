import React from 'react';
import Greeting from "./Greeting/Greeting";
import MainPhoto from "./MainPhoto/MainPhoto";
import s from "./Main.module.scss"
import commonS from "../../common/styles/Common.module.css"
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
    // return (
    //     <div className={s.main}>
    //         <section className={`${commonS.container} ${s.main_container}`}>
    //             <Greeting/>
    //             <MainPhoto/>
    //         </section>
    //     </div>
    // )

    return (
        <>
            <div className={s.bg_layer}/>
            <section className={s.container}>
                <Sidebar/>
                {/*<div>*/}
                {/*    <Greeting/>*/}
                {/*    <MainPhoto/>*/}
                {/*</div>*/}
            </section>
        </>
    )
}

export default Main