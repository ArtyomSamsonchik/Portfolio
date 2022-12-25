import React from 'react';
import s from "./Nav.module.scss";
import {ReactComponent as HomeIcon} from "../../../resourses/images/home.svg";
import {ReactComponent as SkillsIcon} from "../../../resourses/images/skills.svg";
import {ReactComponent as ProjectsIcon} from "../../../resourses/images/projects.svg";
import {ReactComponent as ContactsIcon} from "../../../resourses/images/contacts.svg";

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