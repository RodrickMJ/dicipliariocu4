import React from 'react'
import './label.css'

function Label({content,customClass}) {
  return (
    <>
        <label htmlFor="" className={customClass}>
            {content}
        </label>
    </>
  )
}

export default Label