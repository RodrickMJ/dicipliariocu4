import React from 'react'
import './cadCate.css'

function CadCate({customClass,srcimg,dateuser,titleprenda}) {
  return (
    <>
    <div className={customClass}>
        <img src={srcimg} alt="icon" />
        <p>{dateuser}</p>
        <h4>{titleprenda}</h4>
    </div>
    </>
  )
}

export default CadCate
