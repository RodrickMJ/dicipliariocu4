import React from 'react'
import './infoProduct.css'
import NavHeader from '../../components/pages/NavHeader/NavHeader'
import VistaProdu from '../../components/pages/VistaProdu/VistaProdu'
import InfoProVis from '../../components/pages/InfoProVis/InfoProVis'

function InfoProduc() {
  return (
    <>
    <NavHeader/>
    <div className='contVProd'>
    <VistaProdu/>
    <InfoProVis/>
    </div>
    </>
  )
}

export default InfoProduc