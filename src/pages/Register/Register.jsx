import React from 'react'
import './register.css'
import FormRegister from '../../components/pages/formRegister/FormRegister'
import ReturnRegister from '../../components/ui/returnRegister/ReturnRegister'

function Register() {
  return (
    <>
      <div className='dantes'>
        <ReturnRegister />
        <div className='contrgsm'>
          <FormRegister />
        </div>
      </div>
    </>
  )
}

export default Register