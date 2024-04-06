import React from 'react'
import './propDisen.css'
import ContTelt from '../../ui/ContTelt/ContTelt'
import Images from '../../ui/images/Images'

function PropDisen() {
    return (
        <>
            <div className='procont'>
                <div className='ipropc'>
                    <Images image="rectan.png" customClas="imgDisem"/>
                </div>
                <div className='cpropct'>
                    <ContTelt customclas="propdisco"
                        tituloCont="Construye tus diseños"
                        infoCont="No dejes que tu creatividad se esfume, y plasmalos con nuestros deseñadores."
                        direCont="Manda tu diseño"
                    />
                </div>
            </div>
        </>
    )
}

export default PropDisen