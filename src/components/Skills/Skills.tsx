import React from 'react';
import SkillCard from "../../common/components/SkillCard/SkillCard";
import ContentBox from "../../common/components/ContentBox/ContentBox";
import {ReactComponent as TypescriptIcon} from "../../resourses/svg/typescript.svg";
import {ReactComponent as ReactIcon} from "../../resourses/svg/react.svg";
import {ReactComponent as MaterialUIIcon} from "../../resourses/svg/material-ui.svg";
import {ReactComponent as SassIcon} from "../../resourses/svg/sass.svg";
import {ReactComponent as ReduxIcon} from "../../resourses/svg/redux.svg";
import {ReactComponent as FormikIcon} from "../../resourses/svg/formik.svg";
import {ReactComponent as AxiosIcon} from "../../resourses/svg/axios.svg";
import s from "./Skills.module.scss";

const cards = [
    {
        title: "typescript",
        element: TypescriptIcon,
        description: "A syntactic superset of JavaScript which adds static typing"
    },
    {
        title: "react",
        element: ReactIcon,
        description: "JavaScript-based UI development library"
    },
    {
        title: "material UI",
        element: MaterialUIIcon,
        description: "A React component library that implements Google's Material Design"
    },
    {
        title: "sass",
        element: SassIcon,
        description: "A CSS preprocessor, which adds special features such as variables, nested rules and mixins into regular CSS"
    },
    {
        title: "redux",
        element: ReduxIcon,
        description: "A JavaScript library for managing and centralizing application state"
    },
    {
        title: "formik",
        element: FormikIcon,
        description: "A form management library that provides instruments to ease the process of creating React forms"
    },
    {
        title: "axios",
        element: AxiosIcon,
        description: "A promise based HTTP client for the browser and node.js"
    }
]

const Skills = () => {
    return (
        <ContentBox className={s.skills_container}>
            <span className={s.title_short}>Skills</span>
            <h3 className={s.title_full}>Technologies I know</h3>
            <ul className={s.skills_list}>
                {cards.map((el, i) => (
                    <SkillCard key={"skill " + i} className={s.skill_item}>
                        <div className={s.icon_container}>
                            <el.element className={s.icon}/>
                        </div>
                        <h4 className={s.header}>{el.title}</h4>
                        <p className={s.text}>{el.description}</p>
                    </SkillCard>
                ))}
            </ul>
        </ContentBox>
    )
}

export default Skills