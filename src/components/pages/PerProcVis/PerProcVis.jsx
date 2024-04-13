import React, { useState } from 'react';
import './perProcVist.css';
import Titles from '../../ui/titles/Titles';
import Inputs from '../../ui/input/Inputs';
import Buttons from '../../ui/buttons/Buttons';

function PerProcVis() {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleMostrarFormulario = () => {
        setMostrarFormulario(true);
    };

    const handleCancelar = () => {
        setMostrarFormulario(false);
        resetFormulario();
    };

    return (
        <>
             <div className={`fixClasUser ${mostrarFormulario ? 'formVisible' : ''}`}>
                <Buttons content="Agregar Producto" customClass="AgregarProduct" key="addButton" Handler={handleMostrarFormulario} />

                {mostrarFormulario && (
                    <form className='fontxd'>
                        <Titles text="Formulario" customClass="form-title" />
                        <div className='mozcont'>
                            <Titles text="Nombre" customClass="input-title" />
                            <Inputs type="text" placeholder="Nombre" customClass="input-field" />
                        </div>
                        <div className='mozcont'>
                            <Titles text="Imagen" customClass="input-title" />
                            <Inputs type="text" placeholder="URL de la imagen" customClass="input-field" />
                        </div>
                        <div className='mozcont'>
                            <Titles text="Color" customClass="input-title" />
                            <Inputs type="text" placeholder="Color" customClass="input-field" />
                        </div >
                        <div className='mozcont'>
                            <Titles text="Descripción" customClass="input-title" />
                            <Inputs type="text" placeholder="Descripción" customClass="input-field" />
                        </div>
                        <div className='mozcont'>
                            <Titles text="Precio" customClass="input-title" />
                            <Inputs type="text" placeholder="Precio" customClass="input-field" />
                        </div>
                        <div className='mozcont'>
                            <Titles text="Categoría" customClass="input-title" />
                            <Inputs type="text" placeholder="Categoría" customClass="input-field" />
                        </div>
                        <div className='mozcont'>
                            <Titles text="Tamaño" customClass="input-title" />
                            <Inputs type="text" placeholder="Tamaño" customClass="input-field" />
                        </div>
                        <div className='mozcont'>
                            <Titles text="Temporada" customClass="input-title" />
                            <Inputs type="text" placeholder="Temporada" customClass="input-field" />
                        </div>
                        <div className='mozcont'>
                            <Titles text="Cantidad" customClass="input-title" />
                            <Inputs type="text" placeholder="Cantidad" customClass="input-field" />
                        </div>
                        <div  className='mozcontb'>
                        <Buttons content="Enviar" customClass="submit-buttonA" key="sendButton" />
                    <Buttons content="Cancelar" customClass="submit-buttonC" key="sendButton" Handler={handleCancelar} />
                        </div>
                    </form>
                )}
            </div>
        </>
    );
}

export default PerProcVis;
