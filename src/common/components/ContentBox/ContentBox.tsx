import React, {FC, ReactNode} from 'react';
import s from "./ContentBox.module.scss";

type ContentBoxProps = {
    className?: string
    children: ReactNode
}

const ContentBox: FC<ContentBoxProps> = (props) => {
    const {children, className} = props
    const finalClassName = `${s.box} ${className || ""}`

    return (
        <section className={finalClassName}>
            {children}
        </section>
    )
}

export default ContentBox