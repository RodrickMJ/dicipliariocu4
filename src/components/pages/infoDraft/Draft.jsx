import React from 'react'
import './draft.css'
import Images from '../../ui/images/Images'
import ContTelt from '../../ui/ContTelt/ContTelt'

function Draft() {
  return (
    <>
    <div className='fonddraft' >
        <ContTelt customclas="conttdra" 
        tituloCont="Tipos de Colecciones" 
        infoCont="On Script el sitio web dondre podra encontrar la moda con la comidad  y la expresion personal. Nuestra última colección fusiona tendencias vanguardistas con la esencia atemporal, ofreciendo prendas diseñadas para destacar en cualquier ocasión."
        direCont="Ver Catalogo" 
        />

        <Images customClas="picturddraft" image="datefond.png" />
    </div>
    </>
  )
}

export default Draft
