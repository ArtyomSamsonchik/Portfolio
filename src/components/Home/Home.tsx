import React from 'react';
import ContentBox from "../../common/components/ContentBox/ContentBox";
import s from "./Home.module.scss";

const Home = () => {
    return (
        <ContentBox className={s.greeting}>
            <div className={s.bg_layer}/>
            <span className={s.hello}>Hello, I'm</span>
            <h1 className={s.name}>Artyom Samsonchik</h1>
            <p className={s.text}>A frontend developer</p>
            <a href="#" className={s.link}>Contact me</a>
        </ContentBox>
    )
}

export default Home