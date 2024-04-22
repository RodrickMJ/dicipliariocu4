// Buttons.js
import React from 'react';
import './buttons.css';

function Buttons({ content, customClass, Handler }) {
    return (
        <>
            <button className={customClass} onClick={Handler}>
                {content}
            </button>
        </>
    )
}

export default Buttons;
