import React, {FC} from 'react';
import s from "./Project.module.css"

type ProjectProps = {
    name: string
    description: string
    imageUrl: string
}

const Project: FC<ProjectProps> = (props) => {
    const {name, imageUrl, description} = props

    return (
        <li className={s.project}>
            <div className={s.image_container}>
                <img src={imageUrl} alt="project"/>
                <a href="#">View details</a>
            </div>
            <div className={s.info}>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </li>
    )
}

export default Project