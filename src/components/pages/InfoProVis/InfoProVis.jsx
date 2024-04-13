import React from 'react'
import './infoProVis.css'
import Titles from '../../ui/titles/Titles'
import Pharagraps from '../../ui/pharagraps/Pharagraps'

function InfoProVis() {
    return (
        <>
            <div className='desProV'>
                <Titles text={"Camisa de Botones de Lino"} customClass="Titulo-Prodjuct-vistz" />
                <Pharagraps text={"$\n"+"300"+"\nmnx"} customClass="price-vizt-prodc" />
                <div className='movDesF'>
                    <Titles text="Categoria:" customClass="titulo-des-produz" />
                    <Pharagraps text={"Playera"} customClass="" />
                </div>
                <div className='movDesF'>
                    <Titles text="Color:" customClass="titulo-des-produzCo" />
                    <Pharagraps text={"Negro"} customClass="" />
                </div>
                <div className='movDesF'>
                    <Titles text={"Tamaño:"} customClass="titulo-des-produz" />
                    <Pharagraps text={"chico"} customClass="" />
                </div>
                <div className='movDesF'>
                    <Titles text="Catidad:" customClass="titulo-des-produz" />
                    <Pharagraps text={"1"} customClass="" />
                </div>
                <div className='movDesF1'>
                    <Titles text="Contacto:" customClass="titulo-des-produz" />
                    <Pharagraps text={"1-2-3"} customClass="" />
                </div>
                <div className='movDesF2'>
                    <Titles text="Descripcion:" customClass="titulo-des-produz" />
                    <Pharagraps text={"xd"} customClass="" />
                </div>
            </div>
        </>
    )
}

export default InfoProVis