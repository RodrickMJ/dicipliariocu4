import React from 'react'
import './cards.css'
// import { AiOutlineHeart } from "react-icons/ai";

function Cards({customClass,imgPro,nombrePro,precioPro,IdProduct,Handler}) {
    return (
        <>
            <div className={customClass}>
                <div className='refco'>
                    <a href={`/vProducto/${IdProduct}`}><img src={imgPro} alt="imagen" /></a>
                    {/* <AiOutlineHeart /> */}
                </div>
                <div className='dscc'>
                    <h4>{nombrePro}</h4>
                    <p>$ {precioPro} mnx</p>
                    <div className='visUsProd'>
                    <button type='submit' className='vProc' href={`/vProducto/${IdProduct}`} ><b>Ver Producto</b></button>
                    <button type='submit' className='acPro' onClick={Handler}><b>Actualizar</b></button>
                    <button type='submit' className='elPro' onClick={Handler}><b>Eliminar</b></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards