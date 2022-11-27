import React, {FC} from 'react';
import s from "./Account.module.css";

type AccountProps = {
    link: string
    name: string
}

const Account: FC<AccountProps> = (props) => {
    const {link, name} = props

    return (
        <div className={s.account}>
            <a href={link}>{name}</a>
        </div>
    )
}

export default Account