import React from 'react'
import './sectionDes.css'
import { productRec } from '../../../utils/ProductosRec'
import Cards from '../../ui/cards/Cards'
import Titles from '../../ui/titles/Titles'
import Dirc from '../../ui/Dirc/Dirc'

function SectionDes() {
  return (
    <>
      <div className='contsdes'>
        <div className='title-dest'>
          <Titles customClass="desc-til" text="Destacados" />
          <Dirc routName="#" textCont="Ver mas" customClass="direc-desc" />
        </div>
        <div className='cards-dest'>
          {productRec.map((produc) => (
            <div key={produc.id}>
              <Cards customClass="desct"
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

export default SectionDes