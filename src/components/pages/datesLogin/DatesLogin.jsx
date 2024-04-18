import React, { useState } from 'react';
import Inputs from '../../ui/input/Inputs';
import Label from '../../ui/label/Label';
import Spam from '../../ui/spam/Spam';
import './datesLogin.css';

function DatesLogin({ setEmail, setPassword }) {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            setEmailError('Por favor, ingrese un correo electrónico válido.');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    };

    const validatePassword = (password) => {
        if (password.length < 8) {
            setPasswordError('La contraseña debe tener al menos 8 caracteres.');
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    };

    const handleEmailChange = (e) => {
        const email = e.target.value;
        setEmail(email);
        validateEmail(email);
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setPassword(password);
        validatePassword(password);
    };

    return (
        <>
            <div className='dtasjsx'>
                <Label customClass="type-cont" content="Correo Electrónico" />
                <Inputs
                    customClass="loginp"
                    type="email"
                    placeholder="@user@OnScript.com"
                    onChange={handleEmailChange}
                />
                {emailError && <p className="error-message">{emailError}</p>}

                <div className='contra-chow'>
                    <Label content="Contraseña" />
                    <Spam text="Mostrar contraseña" />
                </div>
                <Inputs
                    customClass="loginp"
                    type="password"
                    placeholder="Contraseña"
                    onChange={handlePasswordChange}
                />
                {passwordError && <p className="error-message">{passwordError}</p>}
            </div>
        </>
    );
}

export default DatesLogin;
