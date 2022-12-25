import React from 'react';
import s from "./Main.module.scss"
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";

const Main = () => {
    return (
        <>
            <div className={s.barrier_top}/>
            <div className={s.bg_layer}/>
            <div className={s.container}>
                <Sidebar/>
                <div className={s.content_wrapper}>
                    <Home/>
                    {/*<Home/>*/}
                    <Skills/>
                </div>
            </div>
            <div className={s.barrier_bottom}/>
        </>
    )
}

export default Main