import React from 'react';
import commonS from "../../common/styles/Common.module.css";
import s from "./RemoteWork.module.css";

const RemoteWork = () => {
    return (
        <div className={`${commonS.outer_box} ${s.remote_outer}`}>
            <section className={`${commonS.container} ${s.remote_container}`}>
                <header className={commonS.header}>
                    <h2>Considering remote work</h2>
                </header>
                <a className={commonS.link} href="#">Hire me</a>
            </section>
        </div>
    )
}

export default RemoteWork