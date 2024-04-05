import React from 'react'
import './cards.css'
// import { AiOutlineHeart } from "react-icons/ai";

function Cards({customClass,imgPro,nombrePro,precioPro}) {
    return (
        <>
            <div className={customClass}>
                <div>
                    <img src={imgPro} alt="imagen" />
                    {/* <AiOutlineHeart /> */}
                </div>
                <div>
                    <h4>{nombrePro}</h4>
                    <p>$ {precioPro} mnx</p>
                    <button>Ver Producto</button>
                </div>
            </div>
        </>
    )
}

export default Cards