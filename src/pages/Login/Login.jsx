import React from 'react'
import FormLogin from '../../components/pages/FormLogin/FormLogin'
import './login.css'
import ImgVistas from '../../components/pages/imgvist/ImgVistas'
import { AiOutlineArrowLeft } from "react-icons/ai";

function Login() {
  return (
    <>
      <div className='fond-inglo'>
        <div className='contreguserper'>
          <div className='opctionretlog'>
            <AiOutlineArrowLeft />
            <a href="/"><p>Back to Main</p></a>
          </div>
          <div className='dats-ing'>
            <FormLogin />
            <ImgVistas />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login