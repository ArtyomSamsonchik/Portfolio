import React from 'react';
import commonS from "../../common/styles/Common.module.css";
import s from "./Contacts.module.css";

const Contacts = () => {
    return (
        <div className={`${commonS.outer_box} ${s.contacts_outer}`}>
            <section className={`${commonS.container} ${s.contacts_container}`}>
                <header className={commonS.header}>
                    <h2>My contacts</h2>
                </header>
                <form className={s.form} id="form">
                    <input className={s.field}/>
                    <input className={s.field}/>
                    <textarea className={s.field} name=""
                              id="" cols={30} rows={10}
                              spellCheck="false"
                    />
                </form>
                <button type="submit" className={commonS.link} form="form">Send</button>
            </section>
        </div>
    )
}

export default Contacts