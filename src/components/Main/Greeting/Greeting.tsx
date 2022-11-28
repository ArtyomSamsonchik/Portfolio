import React from 'react';
import s from "./Greeting.module.css"


//TODO: Maybe insert br elements in h1 instead of p elements.
const Greeting = () => {
    return (
        <div className={s.greeting}>
            <h1>
                Hello<br/>
                I'm Artyom Samsonchik<br/>
                Frontend developer
            </h1>
        </div>
    )
}

export default Greeting