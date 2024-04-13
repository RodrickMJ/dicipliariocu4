import React from 'react'
import './images.css'

function Images({image,customClas }) {
  return (
    <>
        <img className={customClas} src={image} alt="picture"/>
    </>
  )
}

export default Images