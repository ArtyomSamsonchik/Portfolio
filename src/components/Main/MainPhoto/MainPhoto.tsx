import React from 'react';
import s from "./MainPhoto.module.css"
import img from "../../../resourses/img/kvDGZBoq-n0.jpg"

const MainPhoto = () => {
    return <div className={s.main_photo}>
        <div className={s.photo_container}>
            <img src={img} alt="portfolio owner"/>
        </div>
    </div>
}

export default MainPhoto