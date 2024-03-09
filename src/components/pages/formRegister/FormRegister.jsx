import './formRegister.css'
import React from 'react'
import Titles from '../../ui/titles/Titles'
import Pharagraps from '../../ui/pharagraps/Pharagraps'
import DatesRegister from '../datesRegister/DatesRegister'
import Buttons from '../../ui/buttons/Buttons'

function FormRegister() {
    return (
        <>
            <div className='cont-form-reg'>
                <div className='contd'>
                    <div>
                        <Titles customClass="login-texts" text="Cree su cuenta en On Script" />
                        <Pharagraps text="Hecho con amor para diseñadores y compradores." />
                    </div>

                    <DatesRegister />
                    <Buttons customClass="directions" content="Crear mi cuenta" />

                    <div className='marcos-line' >
                        <div className='line-oters' ></div>
                        <Titles customClass="login-texts-1" text="O" />
                        <div className='line-oters' ></div>
                    </div>

                    <Buttons customClass="directions-1" content="Registrarse en Google" />

                    <div className='count-dirc'>
                        <Pharagraps customClass="phar.cont" text="¿Ya tiene una cuenta? " />
                        <a href="/login"><Pharagraps customClass text="Iniciar sesión" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormRegister