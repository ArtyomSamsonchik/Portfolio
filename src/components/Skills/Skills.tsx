import React from 'react';
import s from "./Skills.module.css"
import Skill from "./Skill/Skill";
import commonS from "../../common/styles/Common.module.css";

const Skills = () => {
    const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam cumque dolore ducimus eaque facilis incidunt minus modi nisi non placeat, quae quas quidem quo soluta vel veniam? Dicta, itaque."

    return (
        <div className={`${commonS.outer_box} ${s.skills_outer}`}>
            <section className={`${commonS.container} ${s.skills_container}`}>
                <header className={s.header}>
                    <h2>My skills</h2>
                </header>
                <ul className={s.skills_list}>
                    <Skill skillName="skill" imageUrl="" description={description}/>
                    <Skill skillName="skill" imageUrl="" description={description}/>
                    <Skill skillName="skill" imageUrl="" description={description}/>
                </ul>
            </section>
        </div>
    )
}

export default Skills