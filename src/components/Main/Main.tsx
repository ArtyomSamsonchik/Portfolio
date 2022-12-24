import React from 'react';
import MainPhoto from "./MainPhoto/MainPhoto";
import s from "./Main.module.scss"
import commonS from "../../common/styles/Common.module.css"
import Sidebar from "../Sidebar/Sidebar";
import Greeting from "./Greeting/Greeting";
import Home from "../Home/Home";

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
            <div className={s.barrier_top}/>
            <div className={s.bg_layer}/>
            <div className={s.container}>
                <Sidebar/>
                <div className={s.content_wrapper}>
                    <Home/>
                    <Home/>
                </div>
                {/*<div>*/}
                {/*    <Greeting/>*/}
                {/*    <MainPhoto/>*/}
                {/*</div>*/}
            </div>
            <div className={s.barrier_bottom}/>
        </>
    )
}

export default Main