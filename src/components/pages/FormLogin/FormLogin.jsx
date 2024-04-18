import React, { useState } from 'react';
import axios from 'axios'; // Importamos Axios
import { useNavigate } from 'react-router-dom'; 
import { useAlert } from 'react-alert';
import Titles from '../../ui/titles/Titles';
import Pharagraps from '../../ui/pharagraps/Pharagraps';
import Buttons from '../../ui/buttons/Buttons';
import DatesLogin from '../datesLogin/DatesLogin';
import './formLogin.css';

function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const alert = useAlert();
    const navigate = useNavigate(); 
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:4000/api/auth/signin', { // Hacemos la solicitud POST a la ruta de inicio de sesión
                email: email,
                password: password
            });
            if (response.status === 200) {
                alert.success('Inicio de sesión exitoso!');
                navigate('/');
            } else {
                setError('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setError('Error al iniciar sesión');
        }
    };

    return (
        <>
            <div className='cont-formxd'>
                <div className='contdxd'>
                    <div>
                        <Titles customClass="login-texts" text="Iniciar sesión en On Script" />
                        <Pharagraps text="Inicie sesión para gestionar su cuenta." />
                    </div>

                    <DatesLogin setEmail={setEmail} setPassword={setPassword} />

                    <Buttons customClass="directions" content="Iniciar sesión" onClick={handleLogin} />
                    {error && <p className="error-message">{error}</p>}

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
    );
}

export default FormLogin;
