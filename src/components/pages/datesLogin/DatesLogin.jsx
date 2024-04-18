// DatesLogin.js
import React, { useState } from 'react';
import Inputs from '../../ui/input/Inputs';
import Label from '../../ui/label/Label';
import './datesLogin.css';

const DatesLogin = ({ setCorreo, setPasword }) => {
    const [login, setLogin] = useState({ Correo: '', Pasword: '' });

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLogin({
            ...login,
            [name]: value
        });
        if (name === 'Correo') {
            setCorreo(value);
        } else if (name === 'Pasword') {
            setPasword(value);
        }
    };

    return (
        <div className='dtas'>
            <Label customClass="type-cont" content="Correo Electrónico" />
            <Inputs customClass="loginp" name="Correo" type="email" placeholder="@user@OnScript.com" value={login.Correo} onChange={handleLoginChange} />
            <div className='contra-sow'>
                <Label content="Contraseña" />
                <span>Mostrar contraseña</span>
            </div>
            <Inputs customClass="loginp" name="Pasword" type="password" placeholder="Contraseña" value={login.Pasword} onChange={handleLoginChange} />
        </div>
    );
};

export default DatesLogin;
