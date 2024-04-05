import React from 'react'
import './home.css'
import NavHeader from '../../components/pages/NavHeader/NavHeader'
import Draft from '../../components/pages/infoDraft/Draft'
import CategoCir from '../../components/pages/CategoReco/CategoCir'
import SectionDes from '../../components/pages/SectionDes/SectionDes'

function Home() {
  return (
    <>
      <div className='homeCreat'>
        <NavHeader />
        <Draft />
        <CategoCir />
        <div className='sectionCat'>
          <SectionDes />
        </div>
      </div>
    </>
  )
}

export default Home
