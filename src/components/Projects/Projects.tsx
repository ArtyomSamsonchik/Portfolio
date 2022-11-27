import React from 'react';
import commonS from "../../common/styles/Common.module.css";
import s from "./Projects.module.css";
import Project from "./Project/Project";

const Projects = () => {
    const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem dolorem doloremque, ducimus eius eligendi esse ex explicabo inventore ipsa iusto maiores minima optio quaerat ratione reiciendis rerum ullam, velit?"

    return (
        <div className={`${commonS.outer_box} ${s.projects_outer}`}>
            <section className={`${commonS.container} ${s.projects_container}`}>
                <header className={commonS.header}>
                    <h2>My Projects</h2>
                </header>
                <ul className={s.projects_list}>
                    <Project name={"Project1"} description={description} imageUrl=""/>
                    <Project name={"Project2"} description={description} imageUrl=""/>
                </ul>
            </section>
        </div>
    )
}

export default Projects