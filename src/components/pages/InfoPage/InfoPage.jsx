import React from 'react'
import './infoPage.css'
import ContTelt from '../../ui/ContTelt/ContTelt'
import Images from '../../ui/images/Images'

function InfoPage() {
    return (
        <>
            <div className='contInftp'>
                <div className='clasinfoc'>
                    <ContTelt customclas="tamcontinfp"
                        tituloCont="El significativo de de la reduccion de la contaminacion ambiental con la reventa de las ropas."
                        infoCont="La reventa de ropa juega un papel crucial en la lucha contra la contaminación al reducir la necesidad de producción excesiva, extender la vida útil de las prendas y fomentar un enfoque más consciente y sostenible hacia la moda."
                        direCont="Read story →"
                    />
                </div>
                <div className='clasimpa'>
                    <Images customClas="imgPageInfo" image="rectan.png" />
                </div>
            </div>
        </>
    )
}

export default InfoPage