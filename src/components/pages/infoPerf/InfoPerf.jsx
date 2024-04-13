import React from 'react'
import './infoPerf.css'
import Images from '../../ui/images/Images'
import Titles from '../../ui/titles/Titles'
import Pharagraps from '../../ui/pharagraps/Pharagraps'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { PerfilPru } from '../../../utils/PerfilPru'
import { LuPhoneCall } from "react-icons/lu";

function InfoPerf() {
    const perfil = PerfilPru.find(perfil => perfil.id === 1); 
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
                <Titles customClass="titlecontF" text="Contactos"/>
                <ul>
                    <li><LuPhoneCall size={20} /><Pharagraps customClass="contRdUser" text={perfil.contacto}/></li>
                    <li><a href="#"><FaXTwitter size={20} /> <Pharagraps customClass="contRdUser" text={perfil.contacto}/> </a></li>
                    <li><a href="#"><FaFacebookF size={20} /> <Pharagraps customClass="contRdUser" text={perfil.contacto}/> </a></li>
                    <li><a href="#"><IoLogoInstagram size={20} /> <Pharagraps customClass="contRdUser" text={perfil.contacto}/> </a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default InfoPerf

// 1095342397650

// strange-team-420010
