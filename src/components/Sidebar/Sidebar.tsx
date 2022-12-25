import React from 'react';
import s from "./Sidebar.module.scss"
import UserPhoto from "../../resourses/images/kvDGZBoq-n0.jpg"
import Nav from "./Nav/Nav";

const Sidebar = () => {
    return (
        <aside className={s.aside}>
            <div className={s.user_image}>
                <div className={s.image_container}>
                    <img src={UserPhoto} alt="Portfolio owner"/>
                </div>
            </div>
            <Nav/>
        </aside>
    )
}

export default Sidebar