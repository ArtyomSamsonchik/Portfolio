import React, {FC} from 'react';
import commonS from "../../../common/styles/Common.module.css"
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
                <img src={imageUrl} alt='Решил оставить img, т.к. это скорее "контентное" иозобр., а не фон'/>
                <a className={`${commonS.link} ${s.link}`} href="#">View details</a>
            </div>
            <div className={s.info}>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </li>
    )
}

export default Project