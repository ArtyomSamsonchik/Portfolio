import React from 'react';
import s from "./Nav.module.scss";
import HomeIcon from "../../../common/components/SVGIcons/HomeIcon";
import SkillsIcon from "../../../common/components/SVGIcons/SkillsIcon";
import ProjectsIcon from "../../../common/components/SVGIcons/ProjectsIcon";
import ContactsIcon from "../../../common/components/SVGIcons/ContactsIcon";

const listItems = {
    home: <HomeIcon/>,
    skills: <SkillsIcon/>,
    projects: <ProjectsIcon/>,
    contacts: <ContactsIcon/>
}

const Nav = () => {
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