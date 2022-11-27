import React, {FC} from 'react';
import s from "./Skill.module.css"

type SkillProps = {
    skillName: string
    imageUrl: string
    description: string
}

const Skill: FC<SkillProps> = (props) => {
    const {skillName, imageUrl, description} = props

    //TODO: header tag or div?
    return (
        <li className={s.skill}>
            <header className={s.header}>
                <div className={s.image_container}>
                    <img src={imageUrl} alt="skill"/>
                </div>
                <h3>{skillName}</h3>
            </header>
            <p className={s.description}>{description}</p>
        </li>
    )
}

export default Skill