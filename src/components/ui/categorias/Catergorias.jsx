import React from 'react'
import './categorias.css'

function Catergorias({srcimg,dateuser,titleprenda}) {
  return (
    <>
    <div>
        <img src={srcimg} alt="icon" />
        <p>{dateuser}</p>
        <h4>{titleprenda}</h4>
    </div>
    </>
  )
}

export default Catergorias
