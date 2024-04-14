import React from 'react'
import './siteProduct.css'
import NavHeader from '../../components/pages/NavHeader/NavHeader'
import SiteFilt from '../../components/pages/SiteFilt/SiteFilt'
import AllProdSIte from '../../components/pages/AllProdSite/AllProdSIte'

const SiteProduct = () => {
  return (
    <>
        <div>
            <NavHeader/>
            <div className='movcontfli'>
                <div className='c1filt'>
                <SiteFilt/>
                </div>
                <div className='c2flit'>
                <AllProdSIte/>
                </div>
            </div>
        </div>  
    </>
  )
}

export default SiteProduct
