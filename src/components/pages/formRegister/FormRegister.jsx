import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import swal from 'sweetalert2';
import Titles from '../../ui/titles/Titles';
import Pharagraps from '../../ui/pharagraps/Pharagraps';
import DatesRegister from '../datesRegister/DatesRegister';
import Buttons from '../../ui/buttons/Buttons';
import './formRegister.css';

function FormRegister() {
    const history = useHistory(); // Obtiene el objeto history para redirección
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        telefono: '',
        img: '',
        direccion: '',
        isAdmin: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            [name]: checked
        });
    };

    const handleRegistration = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/auth/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Redirecciona al usuario a la página de inicio de sesión después del registro exitoso
                history.push('/login');
                swal.fire({
                    icon: 'success',
                    title: '¡Registro exitoso!',
                    text: 'Tu cuenta ha sido creada exitosamente.',
                });
            } else {
                throw new Error('Error al registrar la cuenta');
            }
        } catch (error) {
            console.error('Error:', error);
            swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ha ocurrido un error al registrar la cuenta.',
            });
        }
    };

    return (
        <>
            <div className='cont-form-reg'>
                <div className='contd'>
                    <div>
                        <Titles customClass="login-texts" text="Cree su cuenta en On Script" />
                        <Pharagraps text="Hecho con amor para diseñadores y compradores." />
                    </div>

                    <DatesRegister
                        formData={formData}
                        onInputChange={handleInputChange}
                        onCheckboxChange={handleCheckboxChange}
                    />
                    <Buttons customClass="directions" content="Crear mi cuenta" onClick={handleRegistration} />

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

export default FormRegister;
