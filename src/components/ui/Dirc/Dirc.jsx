import React from 'react'
import './dirc.css'

function Dirc({routName,customClass,textCont}) {
  return (
    <>
    <div>
        <a href={routName} className={customClass}>
            {textCont}
        </a>
    </div>
    </>
  )
}

export default Dirc