import React from 'react';
import commonS from "../../common/styles/Common.module.css";
import s from "./Projects.module.css";
import Project from "./Project/Project";
import img from "../../resourses/images/d57nqqo.jpg"

const Projects = () => {
    const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem dolorem doloremque, ducimus eius eligendi esse ex explicabo inventore ipsa iusto maiores minima optio quaerat ratione reiciendis rerum ullam, velit?"

    return (
        <div className={`${commonS.outer_box} ${s.projects_outer}`}>
            <section className={`${commonS.container} ${s.projects_container}`}>
                <h2>My Projects</h2>
                <ul className={s.projects_list}>
                    <Project name={"Project1"} description={description} imageUrl={img}/>
                    <Project name={"Project2"} description={description} imageUrl={img}/>
                </ul>
            </section>
        </div>
    )
}

export default Projects