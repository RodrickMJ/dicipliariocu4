import React from 'react'
import './input.css'

function Inputs({type,placeholder,customClass}) {
  return (
    <>
        <input className={customClass} type={type} placeholder={placeholder}/>
    </>
  )
}

export default Inputs