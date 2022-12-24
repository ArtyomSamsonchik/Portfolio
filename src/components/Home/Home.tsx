import React from 'react';
import s from "./Home.module.scss";

const Home = () => {
    return (
        <div className={s.greeting}>
            <div className={s.bg_layer}/>
            <span className={s.hello}>Hello, I'm</span>
            <h1 className={s.name}>Artyom Samsonchik</h1>
            <p className={s.text}>A frontend developer</p>
            <a href="#" className={s.link}>Contact me</a>
        </div>
    )
}

export default Home