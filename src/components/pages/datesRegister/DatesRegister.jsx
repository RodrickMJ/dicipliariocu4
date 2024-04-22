import React from 'react';
import Label from '../../ui/label/Label';
import Inputs from '../../ui/input/Inputs';
import Spam from '../../ui/spam/Spam';
import './datesRegister.css';

function DatesRegister({ formData, onInputChange, onCheckboxChange }) {
    return (
        <>
            <div className='contDatesUsers'>
                <Label content="Nombre del Usuario" />
                <Inputs
                    customClass="loginp"
                    type="text"
                    placeholder="User Name"
                    name="username"
                    value={formData.username}
                    onChange={onInputChange}
                />
                <Label customClass="type-cont" content="Correo Electronico" />
                <Inputs
                    customClass="loginp"
                    type="text"
                    placeholder="@user@OnScript.com"
                    name="email"
                    value={formData.email}
                    onChange={onInputChange}
                />
                <div className='contra-sow'>
                    <Label content="Contraseña" />
                    <Spam text="" />
                </div>
                <Inputs
                    customClass="loginp"
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={formData.password}
                    onChange={onInputChange}
                />
                {/* Utiliza un input de tipo checkbox para permitir al usuario seleccionar si desea ser administrador */}
                <div className="checkbox-container">
                    <label htmlFor="isAdminCheckbox">Registrarse como administrador</label>
                    <input
                        id="isAdminCheckbox"
                        type="checkbox"
                        name="isAdmin"
                        checked={formData.isAdmin}
                        onChange={onCheckboxChange}
                    />
                </div>
            </div>
        </>
    );
}

export default DatesRegister;
