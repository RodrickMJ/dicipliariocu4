import React from 'react'
import './infoPerf.css'
import Images from '../../ui/images/Images'
import Titles from '../../ui/titles/Titles'
import Pharagraps from '../../ui/pharagraps/Pharagraps'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
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
                <Titles customClass="" text={perfil.nombre} />
                <Pharagraps customClass="" text={perfil.direccion} />
            </div>
            <div className='contperf'>
                <Titles customClass="" text="Contactos"/>
                <ul>
                    <li><LuPhoneCall /><Pharagraps customClass="" text={perfil.contacto}/></li>
                    <li><a href="#"><FaXTwitter /></a></li>
                    <li><a href="#"><FaFacebookF /></a></li>
                    <li><a href="#"><IoLogoInstagram /></a></li>
                    <li><a href="#"><FaWhatsapp /></a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default InfoPerf