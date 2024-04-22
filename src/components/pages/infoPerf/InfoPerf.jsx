import React, { useState } from 'react';
import './infoPerf.css';
import Images from '../../ui/images/Images';
import Titles from '../../ui/titles/Titles';
import Pharagraps from '../../ui/pharagraps/Pharagraps';
import { LuPhoneCall } from "react-icons/lu";
import Buttons from '../../ui/buttons/Buttons';
import Inputs from '../../ui/input/Inputs';
import { PerfilPru } from '../../../utils/PerfilPru';

function InfoPerf() {
    const perfil = PerfilPru.find(perfil => perfil.id === 1);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contacto, setContacto] = useState('');
    const [direccion, setDireccion] = useState('');

    const handleMostrarFormulario = () => {
        setMostrarFormulario(true);
    };

    const handleCancelar = () => {
        setMostrarFormulario(false);
    };

    const handleEnviar = (e) => {
        e.preventDefault();
        console.log("Enviando datos actualizados:", { nombre, email, contacto, direccion });
        setMostrarFormulario(false);
    };

    return (
        <>
        <div className='contPerf'>
            <div className='imgsPerf'>
                <Images customClas="imgPortPer" image={perfil.imgPor} />
                <Images customClas="imgPerUsr" image={perfil.imgPer} />
            </div>
            <div className='datesPerf'>
                <Titles customClass="nameUserF" text={perfil.nombre} />
                <div className='dircUseCont' >
                    <Titles customClass="directionUserf" text="Direccion" />
                    <Pharagraps customClass="" text={perfil.direccion} />
                </div>
            </div>
            <div className='contperfCR'>
                <Titles customClass="titlecontF" text="Contacto" />
                <ul>
                    <li><LuPhoneCall size={20} /><Pharagraps customClass="contRdUser" text={perfil.contacto} /></li>
                </ul>
            </div>
            <div>
                <Buttons content="Actualizar perfil" customClass=""/>
                <form >
                        <div>
                            <Titles text="Nombre" customClass="" />
                            <Inputs type="text" placeholder="Nombre" />
                        </div>
                        <div>
                            <Titles text="Email" customClass="" />
                            <Inputs type="text" placeholder="Email"  />
                        </div>
                        <div>
                            <Titles text="Contacto" customClass="" />
                            <Inputs type="text" placeholder="Contacto" />
                        </div>
                        <div>
                            <Titles text="Direccion" customClass="" />
                            <Inputs type="text" placeholder="Direccion"  />
                        </div>
                        <div className='mozcontb'>
                            <Buttons content="Enviar" customClass="submit-buttonA" type="submit" />
                            <Buttons content="Cancelar" customClass="submit-buttonC"  type="submit" />
                        </div>
                    </form>
            </div>
        </div>
        </>
    );
}

export default InfoPerf;
