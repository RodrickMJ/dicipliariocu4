import React from 'react'
import './titles.css'

function Titles({text,customClass}) {
  return (
    <>
        <h1 className={customClass}> 
            {text}
        </h1>
    </>
  )
}

export default Titles