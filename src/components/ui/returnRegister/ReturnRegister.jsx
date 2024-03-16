import React from 'react'
import './returnRegister.css'
import { AiOutlineArrowLeft } from "react-icons/ai";

function ReturnRegister() {
    return (
        <>
            <div className='backAndflu'>
                <div className='opctionret'>
                <AiOutlineArrowLeft />
                    <a href="/"><p>Back to Main</p></a>
                </div>
            </div>
        </>
    )
}

export default ReturnRegister