import React from 'react'
import './buttons.css'

function Buttons({content,customClass}) {
  return (
    <>
        <button className={customClass}>
            {content}
        </button>
    </>
  )
}

export default Buttons