import React from 'react'
import './home.css'
import NavHeader from '../../components/pages/NavHeader/NavHeader'

function Home() {
  return (
    <>
      <NavHeader/>
        <div>

            <a href="/register">register</a>
            <br />
            <a href="/login">login</a>
        </div>
    </>
  )
}

export default Home
