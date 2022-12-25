import React, {FC, ReactNode} from 'react';
import s from "./ContentBox.module.scss";

type ContentBoxProps = {
    className?: string
    children: ReactNode
}

const ContentBox: FC<ContentBoxProps> = (props) => {
    const {children, className} = props
    const finalClassName = `${s.content_box} ${className || ""}`

    return (
        <div className={finalClassName}>
            {children}
        </div>
    )
}

export default ContentBox