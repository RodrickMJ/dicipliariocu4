import React from 'react'
import Inputs from '../../ui/input/Inputs'
import Label from '../../ui/label/Label'
import Spam from '../../ui/spam/Spam'
import './datesLogin.css'

function DatesLogin() {
    return (
        <>
            <div className='dtas'>
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

export default DatesLogin