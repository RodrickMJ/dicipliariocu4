import React, { useState, useEffect } from 'react';
import Titles from '../titles/Titles';
import Inputs from '../input/Inputs';
import Buttons from '../buttons/Buttons';
import './UpdateForm.css';

function UpdateForm({ handleSubmit, handleCancelar, productData }) {
    const [nombre, setNombre] = useState('');
    const [imagen, setImagen] = useState(null);

    useEffect(() => {
        // Establecer el estado inicial de los campos del formulario con los datos del producto
        if (productData) {
            setNombre(productData.nombre);
            // Puedes establecer otros campos aquí
        }
    }, [productData]);

    const handleEnviar = async (event) => {
        event.preventDefault();
        // Aquí puedes hacer la solicitud PUT a tu API para actualizar el producto en la base de datos
        try {
            const response = await fetch('TU_API_URL', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: nombre,
                    // Otros campos del producto que desees enviar
                }),
            });
            // Manejar la respuesta de la API según sea necesario
            console.log('Producto actualizado:', response);
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };

    return (
        <form className='fontxdupdate' onSubmit={handleSubmit}>
            <Titles text="Updgrade" customClass="FormularioUpdgrade" />
            <div className='mozcont'>
                <Titles text="Nombre" customClass="input-title" />
                <Inputs type="text" placeholder="Nombre" customClass="input-field" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className='mozcont'>
                <Titles text="Imagen 1" customClass="input-title" />
                <Inputs type="file" placeholder="Seleccionar imagen" customClass="input-field" onChange={(e) => setImagen(e.target.files[1])} />
            </div>
            <div className='mozcont'>
                <Titles text="Imagen 2" customClass="input-title" />
                <Inputs type="file" placeholder="Seleccionar imagen" customClass="input-field" onChange={(e) => setImagen(e.target.files[0])} />
            </div>
            <div className='mozcont'>
                <Titles text="Imagen 3" customClass="input-title" />
                <Inputs type="file" placeholder="Seleccionar imagen" customClass="input-field" onChange={(e) => setImagen(e.target.files[0])} />
            </div>
            <div className='mozcont'>
                <Titles text="Imagen 4" customClass="input-title" />
                <Inputs type="file" placeholder="Seleccionar imagen" customClass="input-field" onChange={(e) => setImagen(e.target.files[0])} />
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
            <div className='mozcontb'>
                <Buttons content="Enviar" customClass="submit-buttonA" key="sendButton" onClick={handleEnviar} />
                <Buttons content="Cancelar" customClass="submit-buttonC" key="cancelButton" onClick={handleCancelar} />
            </div>
        </form>
    );
}

export default UpdateForm;
