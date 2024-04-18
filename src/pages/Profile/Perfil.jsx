import React from 'react'
import AllProdUs from '../../components/pages/AllProdUs/AllProdUs'
import NavHeader from '../../components/pages/NavHeader/NavHeader'
import PerProcVis from '../../components/pages/PerProcVis/PerProcVis'
import InfoPerf from '../../components/pages/infoPerf/InfoPerf'
import './perfil.css'

function Perfil() {
  return (
    <>
        <div>
            <NavHeader />
            <InfoPerf/>
            <PerProcVis/>
            <AllProdUs/>
        </div>
    </>
  )
}

export default Perfil