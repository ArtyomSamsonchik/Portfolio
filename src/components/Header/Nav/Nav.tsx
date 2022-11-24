import React from 'react';
import s from "./Nav.module.css"

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><a href="#">Main page</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </nav>
    )
}

export default Nav