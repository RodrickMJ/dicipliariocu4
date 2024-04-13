import React from 'react'
import './cadCate.css'

function CadCate({customClass,srcimg,dateuser,titleprenda,idProducto}) {
  return (
    <>
    <div className={customClass}>
        <a href={idProducto}><img src={srcimg} alt="icon" /></a>
        <p>{dateuser}</p>
        <a href={idProducto}><h4>{titleprenda}</h4></a>
    </div>
    </>
  )
}

export default CadCate
