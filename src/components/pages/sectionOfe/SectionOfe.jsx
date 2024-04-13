import React from 'react'
import './sectionOfe.css'
import Titles from '../../ui/titles/Titles'
import Dirc from '../../ui/Dirc/Dirc'
import Cards from '../../ui/cards/Cards'
import { productRec } from '../../../utils/ProductosRec'

function SectionOfe() {
  return (
    <>
        <div className='secofr'>
        <div className='titleofrt'>
          <Titles customClass="ofert-til" text="Ofertas" />
          <Dirc routName="#" textCont="Ver mas" customClass="direc-ofert" />
        </div>
        {/* <div className='cardsofert'>
          {productRec.map((produc) => (
            <div key={produc.id}>
              <Cards customClass="ofertdc"
                imgPro={produc.imgaePro}
                nombrePro={produc.titulo}
                precioPro={produc.precio}
              />
            </div>
          ))}
        </div> */}
        <div className='cardsofert'>
          {productRec.slice(0, 4).map((produc) => (
            <div key={produc.id}>
              <Cards customClass="ofertdc" IdProduct={produc.id}
                imgPro={produc.imgaePro}
                nombrePro={produc.titulo}
                precioPro={produc.precio}
              />
            </div>
          ))}
        </div>
        </div>
    </>
  )
}

export default SectionOfe