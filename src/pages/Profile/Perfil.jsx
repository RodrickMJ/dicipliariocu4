import React from 'react'
import './perfil.css'
import NavHeader from '../../components/pages/NavHeader/NavHeader'
import InfoPerf from '../../components/pages/infoPerf/InfoPerf'
import PerProcVis from '../../components/pages/PerProcVis/PerProcVis'
import AllProdUs from '../../components/pages/AllProdUs/AllProdUs'

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