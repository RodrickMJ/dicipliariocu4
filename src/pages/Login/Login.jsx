import React from 'react'
import FormLogin from '../../components/pages/FormLogin/FormLogin'
import './login.css'
import ImgVistas from '../../components/pages/imgvist/ImgVistas'

function Login() {
  return (
    <>
        <div className='fond-ing'>
            <div className='dats-ing'>
            <FormLogin />
            <ImgVistas />
            </div>
        </div>
    </>
  )
}

export default Login