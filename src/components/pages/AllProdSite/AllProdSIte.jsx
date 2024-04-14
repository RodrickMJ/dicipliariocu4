import React from 'react'
import './allProdSite.css'
import Cards from '../../ui/cards/Cards'
import { productRec } from '../../../utils/ProductosRec'

function AllProdSIte() {
  return (
    <>
       <div className="productos-container-filt">
            {productRec.map(producto => (
                <Cards
                    key={producto.id}
                    customClass="cardsfiltDis"
                    imgPro={producto.imgaePro}
                    nombrePro={producto.titulo}
                    precioPro={producto.precio}
                    IdProduct={producto.id}
                />
            ))}
        </div>
    </>
  )
}

export default AllProdSIte