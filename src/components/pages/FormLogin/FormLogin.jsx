import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Importa el componente Navigate
import Swal from 'sweetalert2';
import Buttons from '../../ui/buttons/Buttons';
import Pharagraps from '../../ui/pharagraps/Pharagraps';
import Titles from '../../ui/titles/Titles';
import DatesLogin from '../datesLogin/DatesLogin';
import './formLogin.css';

function FormLogin() {
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Nuevo estado para verificar si el usuario ha iniciado sesión

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const credentials = { username, email, password };

        try {
            const response = await fetch('http://localhost:4000/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': 'bezkoder-secret-key', 
                },
                body: JSON.stringify(credentials)
            });
            if (!response.ok) {
                throw new Error('Error al iniciar sesión');
            }
    
            const data = await response.json();
            localStorage.setItem('token', data.accessToken);
            setIsLoggedIn(true); // Actualiza el estado para indicar que el usuario ha iniciado sesión

            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "¡Sesión iniciada correctamente!",
                showConfirmButton: false,
                timer: 5500
            });
        } catch (error) {
            console.error('Error al enviar datos de inicio de sesión:', error);
            setError('Error al iniciar sesión, por favor intente nuevamente.');
        }
    };

    // Si el usuario ha iniciado sesión, redirige a la página de perfil
    if (isLoggedIn) {
        return <Navigate to="/perfil" replace />;
    }

    return (    
        <div className='cont-form'>
            <div className='contd'>
                <div>
                    <Titles customClass="login-texts" text="Iniciar sesión en On Script" />
                    <Pharagraps customClass="" text="Inicie sesión para gestionar su cuenta." />
                </div>

                <form onSubmit={handleLoginSubmit}>
                    <DatesLogin setUsername={setUsername} setEmail={setEmail} setPassword={setPassword} />
                    <Buttons customClass="directions" type="submit" content="Iniciar sesión" />
                </form>

                {error && <div className="error-message">{error}</div>}

                <div className='count-dirc'>
                    <Pharagraps customClass="phar.cont" text="¿No tiene una cuenta?" />
                    <a href="/register"><Pharagraps customClass="" text="Regístrese" /></a>
                </div>
            </div>
        </div>
    );
}

export default FormLogin;
