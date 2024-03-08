import React from 'react'

function Spam({customClass,id,text}) {
  return (
    <>
        <span className={customClass} id={id}>
            {text}
        </span>
    </>
  )
}

export default Spam