import React, { useState } from 'react';
import Inputs from '../../ui/input/Inputs';
import Label from '../../ui/label/Label';
import './datesLogin.css';

const DatesLogin = ({ setUsername, setEmail, setPassword }) => {
    const [login, setLogin] = useState({ username: '', email: '', password: '' });

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLogin({
            ...login,
            [name]: value
        });
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    return (
        <div className='dtasjsx'>
            <Label customClass="type-cont" content="Nombre de Usuario" />
            <Inputs customClass="loginp" name="username" type="text" placeholder="Nombre de Usuario" value={login.username} onChange={handleLoginChange} />

            <Label customClass="type-cont" content="Correo Electrónico" />
            <Inputs customClass="loginp" name="email" type="email" placeholder="@user@OnScript.com" value={login.email} onChange={handleLoginChange} />
            <div className='contra-chow'>
                <Label content="Contraseña" />
                <span></span>
            </div>
            <Inputs customClass="loginp" name="password" type="password" placeholder="Contraseña" value={login.password} onChange={handleLoginChange} />
        </div>
    );
};

export default DatesLogin;
