import React from 'react'
import './siteFilt.css'
import Titles from '../../ui/titles/Titles'
import Pharagraps from '../../ui/pharagraps/Pharagraps'

function SiteFilt() {
    return (
        <>
            <div className='filcont'>
                <ul>
                    <li className='contflildis'>
                    <Titles text="Ofertas" customClass="titlesfilt" />   
                        <ul className='navcontfil'>
                            <li><a href=""><Pharagraps text="Únete ya y recibe -10% descuento" /></a></li>
                        </ul>
                    </li>
                    <li className='contflildis'>
                    <Titles text="Nuevos Productos" customClass="titlesfilt" />
                        <ul className='navcontfil'>
                            <li><a href=""><Pharagraps text="Ver Todo" /></a></li>
                            <li><a href=""><Pharagraps text="Playeras" /></a></li>
                            <li><a href=""><Pharagraps text="Pantalones" /></a></li>
                            <li><a href=""><Pharagraps text="Sudaderas y hoodies" /></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SiteFilt