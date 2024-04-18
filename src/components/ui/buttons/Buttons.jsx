import React from 'react'
import './buttons.css'
import { Link } from 'react-router-dom';


function Buttons({content,customClass,Handler}) {
  return (
    <>
        <button className={customClass} onClick={Handler} >
            {content}
        </button>
        
    </>
  )
}

export default Buttons