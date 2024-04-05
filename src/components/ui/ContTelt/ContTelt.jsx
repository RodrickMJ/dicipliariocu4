import React from 'react'
import './contTelt.css'

function ContTelt({customclas,tituloCont,infoCont,direCont}) {
  return (
    <>
        <div className={customclas}>
            <h5>{tituloCont}</h5>
            <p>{infoCont}</p>
            <button>{direCont}</button>
        </div>
    </>
  )
}

export default ContTelt
