import React from 'react'
import Titles from '../../ui/titles/Titles'
import Pharagraps from '../../ui/pharagraps/Pharagraps'
import Buttons from '../../ui/buttons/Buttons'
import DatesLogin from '../datesLogin/DatesLogin'
import './formLogin.css'

function FormLogin() {
    return (
        <>
            <div className='cont-form'>
                <div className='contd'>
                    <div>
                        <Titles customClass="login-texts" text="Iniciar sesión en On Script" />
                        <Pharagraps text="Inicie sesión para gestionar su cuenta." />
                    </div>

                    <DatesLogin />
                    <Buttons customClass="directions" content="Iniciar sesión" />

                    <div className='marcos-line' >
                        <div className='line-oters' ></div>
                        <Titles customClass="login-texts-1" text="O" />
                        <div className='line-oters' ></div>
                    </div>

                    <Buttons customClass="directions-1" content="Continuar con Google" />

                    <div className='count-dirc'> 
                        <Pharagraps customClass="phar.cont" text="¿No tiene una cuenta?" />
                        <a href="/register"><Pharagraps customClass text="Regístrese" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormLogin