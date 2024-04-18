import React from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
// import { useAuth } from '../../context/AuthContext'; // Importa el hook useAuth
import Buttons from '../../ui/buttons/Buttons';
import Images from '../../ui/images/Images';
import Inputs from '../../ui/input/Inputs';
import Pharagraps from '../../ui/pharagraps/Pharagraps';
import Titles from '../../ui/titles/Titles';
import './navHeader.css';

function NavHeader() {
    // const { user } = useAuth(); 
    // const loginRoute = user ? '/perfil' : '/login';

    return (
        <>
            <div className='header-nav'>
                <div className='contnavdet'>
                    <div className='searchandlogs'>
                        <a href="/"><Images customClas="logoImg" image="/log.jpeg" /></a>
                        <div className='searchcont'>
                            <Inputs customClass="searchHom" type="text" placeholder="Buscar" />
                            <Buttons customClass="iconseachrHome" content={<AiOutlineSearch size={20}/>} />
                        </div>
                    </div>

                    <div className='navinterc'>
                        <ul>
                            <li><a href={"/login"}>
                                <div className='ternarch'>
                                    <Titles customClass="usernav" text="Usuario" />
                                    <Pharagraps customClass="datsnavuser" text="Informacion del usuario" />
                                </div>
                            </a></li>
                            <li className='tipecar'><a href="#"><AiOutlineShoppingCart size={40} /></a></li>
                            <li><a href="#"><AiOutlineMenu size={35} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavHeader;
