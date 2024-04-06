import React from 'react'
import './home.css'
import NavHeader from '../../components/pages/NavHeader/NavHeader'
import Draft from '../../components/pages/infoDraft/Draft'
import CategoCir from '../../components/pages/CategoReco/CategoCir'
import SectionDes from '../../components/pages/SectionDes/SectionDes'
import PropDisen from '../../components/pages/PropDise/PropDisen'
import InfoPage from '../../components/pages/InfoPage/InfoPage'
import SectionOfe from '../../components/pages/sectionOfe/SectionOfe'
import Footer from '../../components/pages/footer/Footer'

function Home() {
  return (
    <>
      <div className='homeCreat'>
        <NavHeader />
        <Draft />
        <CategoCir />
        <div className='sectionCat'>
          <SectionDes />
          <div className='infoandseding'>
            <PropDisen/>
            <InfoPage/>
          </div>
          <SectionOfe/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Home
