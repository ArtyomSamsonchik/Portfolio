import React from 'react';
import s from "./Greeting.module.css"


//TODO: Maybe insert br elements in h1 instead of p elements.
const Greeting = () => {
    return (
        <div className={s.greeting}>
            <h1>Hello</h1>
             <p>I'm Artyom Samsonchik</p>
            <p>Frontend developer</p>
        </div>
    )
}

export default Greeting