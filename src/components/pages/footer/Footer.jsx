import React from 'react'
import './footer.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
        <div className='disfoo'>
            <div>
                
            </div>
            <div>
                <ul>
                    <li><a href="#"><FaXTwitter /></a></li>
                    <li><a href="#"><FaFacebookF /></a></li>
                    <li><a href="#"><IoLogoInstagram /></a></li>
                    <li><a href="#"><FaWhatsapp /></a></li>
                </ul>
                <p>
                © 2019-2020 Wave Multipurpose Design Template.
                </p>
            </div>
        </div>
    </>
  )
}

export default Footer