import React from 'react'
import './navHeader.css'
import Buttons from '../../ui/buttons/Buttons'
import Inputs from '../../ui/input/Inputs'
import Images from '../../ui/images/Images'
import Titles from '../../ui/titles/Titles'
import Pharagraps from '../../ui/pharagraps/Pharagraps'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

function NavHeader() {
    return (
        <>
            <div className='header-nav'>
                <div className='contnavdet'>
                    <div className='searchandlogs'>
                        <Images customClas="logoImg" image="log.jpeg" />
                        <div className='searchcont'>
                            <Inputs customClass="searchHom" type="text" placeholder="Buscar" />
                            <Buttons customClass="iconseachrHome" content={<AiOutlineSearch size={20}/>} />
                        </div>
                    </div>

                    <div className='navinterc'>
                        <ul>
                            <li><a href="/perfil">
                                <div className='ternarch'>
                                    <Titles customClass="usernav" text="Usuario" />
                                    <Pharagraps customClass="datsnavuser" text="Informacion del usuario" />
                                </div>
                            </a></li>
                            <li><a href="#"><AiOutlineShoppingCart size={40} /></a></li>
                            <li><a href="#"><AiOutlineMenu size={35} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavHeader