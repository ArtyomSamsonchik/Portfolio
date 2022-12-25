import React, {FC, ReactNode} from 'react';
import s from "./SkillCard.module.scss";

type SkillCardProps = {
    className?: string
    children: ReactNode
}

const SkillCard: FC<SkillCardProps> = (props) => {
    const {className, children} = props
    const finalClassName = `${s.card} ${className || ""}`

    return (
        <li className={finalClassName}>
            {children}
        </li>
    )
}

export default SkillCard