import React from 'react'
import './input.css'

function Inputs({type,placeholder,customClass,name,value,onChange}) {
  return (
    <>
        <input className={customClass} type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} />
    </>
  )
}

export default Inputs