import React from 'react';
import commonS from "../../common/styles/Common.module.css";
import s from "./Footer.module.css";
import Account from "./Account/Account";

const Footer = () => {
    return (
        <div className={`${commonS.outer_box} ${s.footer_outer}`}>
            <footer className={`${commonS.container} ${s.footer_container}`}>
                <h3 className={commonS.header}>
                    Artyom Samsonchik
                </h3>
                <div className={s.accounts}>
                    <Account link="#" name="VK"/>
                    <Account link="#" name="Telegram"/>
                    <Account link="#" name="Instagram"/>
                    <Account link="#" name="Linkedin"/>
                </div>
                <div className={s.copyright}>© 2022 All rights reserved.</div>
            </footer>
        </div>
    )
}

export default Footer