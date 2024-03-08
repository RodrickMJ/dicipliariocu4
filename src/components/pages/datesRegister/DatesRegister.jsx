import React from 'react'
import Label from '../../ui/label/Label'
import Inputs from '../../ui/input/Inputs'
import Spam from '../../ui/spam/Spam'
import './datesRegister.css'

function DatesRegister() {
    return (
        <>
            <div className='contDatesUsers'>
                <Label content="Nombre del Usuario" />
                <Inputs customClass="loginp" type="tex" placeholder="User Name"  />
                <Label customClass="type-cont" content="Correo Electronico" />
                <Inputs customClass="loginp" type="tex" placeholder="@ user@OnScript.com" />
                <div className='contra-sow'>
                    <Label content="Contraseña" />
                    <Spam text="Mostrar contraseña" />
                </div>
                <Inputs customClass="loginp" type="text" placeholder={":v"} />
            </div>
        </>
    )
}

export default DatesRegister