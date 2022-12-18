import React from 'react';
import s from "./Nav.module.scss";

const Nav = () => {
    const links = ["Home", "Skills", "Projects", "Contacts"]

    return (
        <nav className={s.nav}>
            <ul>
                {links.map((link, i) => <li key={"link " + i}>{link}</li>)}
            </ul>
        </nav>
    )
}

export default Nav