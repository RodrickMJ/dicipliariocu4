import React from 'react'
import './draft.css'
import Images from '../../ui/images/Images'
import Titles from '../../ui/titles/Titles'
import Pharagraps from '../../ui/pharagraps/Pharagraps'
import Buttons from '../../ui/buttons/Buttons'

function Draft() {
  return (
    <>
    <div className='fonddraft' >
        <div className='conttdra'>
            <Titles customClass="titledrf" text="Tipos de Colecciones" />
            <Pharagraps customClass="infodraft" text="On Script el sitio web dondre podra encontrar la moda con la comidad  y la expresion personal. Nuestra última colección fusiona tendencias vanguardistas con la esencia atemporal, ofreciendo prendas diseñadas para destacar en cualquier ocasión." />
            <Buttons customClass="butfras" content="Ver Catalogo" />
        </div>
        <Images customClas="picturddraft" image="datefond.png" />
    </div>
    </>
  )
}

export default Draft
