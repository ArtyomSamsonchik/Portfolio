import React from 'react';
import commonS from "../../common/styles/Common.module.css"
import s from "./Header.module.css"
import Nav from "./Nav/Nav";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={`${commonS.container} ${s.header_container}`}>
                <Nav/>
            </div>
        </header>
    )
}

export default Header