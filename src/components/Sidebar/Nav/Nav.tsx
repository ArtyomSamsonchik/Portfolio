import React from 'react';
import s from "./Nav.module.scss";
import HomeIcon from "../../SVGIcons/HomeIcon";
import SkillsIcon from "../../SVGIcons/SkillsIcon";
import ProjectsIcon from "../../SVGIcons/ProjectsIcon";
import ContactsIcon from "../../SVGIcons/ContactsIcon";

const Nav = () => {
    const listItems = {
        home: <HomeIcon/>,
        skills: <SkillsIcon/>,
        projects: <ProjectsIcon/>,
        contacts: <ContactsIcon/>
    }

    return (
        <nav className={s.nav}>
            <ul>
                {Object.entries(listItems).map(
                    ([link, icon], i) => (
                        <li key={"link " + i}>
                            <a href="#">
                                {icon}
                                {link}
                            </a>
                        </li>)
                )}
            </ul>
        </nav>
    )
}

export default Nav