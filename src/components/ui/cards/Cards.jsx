import React from 'react'
import './cards.css'
// import { AiOutlineHeart } from "react-icons/ai";

function Cards({customClass,imgPro,nombrePro,precioPro}) {
    return (
        <>
            <div className={customClass}>
                <div className='refco'>
                    <img src={imgPro} alt="imagen" />
                    {/* <AiOutlineHeart /> */}
                </div>
                <div className='dscc'>
                    <h4>{nombrePro}</h4>
                    <p>$ {precioPro} mnx</p>
                    <button><b>Ver Producto</b></button>
                </div>
            </div>
        </>
    )
}

export default Cards