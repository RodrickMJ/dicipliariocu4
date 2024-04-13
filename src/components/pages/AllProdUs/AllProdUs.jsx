import React from 'react'
import { productRec } from '../../../utils/ProductosRec'
import Cards from '../../ui/cards/Cards'
import './allProdUs.css'

function AllProdUs() {
  return (
    <>
        <div className="productos-container-perf">
            {productRec.map(producto => (
                <Cards
                    key={producto.id}
                    customClass="cardsPerfDis"
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

export default AllProdUs