import React, { useState } from 'react';
import './perProcVist.css';
import Titles from '../../ui/titles/Titles';
import Inputs from '../../ui/input/Inputs';
import Buttons from '../../ui/buttons/Buttons';

function PerProcVis() {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [nombre, setNombre] = useState('');
    const [color, setColor] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');
    const [tamaño, setTamaño] = useState('');
    const [temporada, setTemporada] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [genero, setGenero] = useState('');
    const [imagen, setImagen] = useState(null);

    const handleMostrarFormulario = () => {
        setMostrarFormulario(true);
    };

    const handleCancelar = () => {
        setMostrarFormulario(false);
        resetFormulario();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('color', color);
        formData.append('descripcion', descripcion);
        formData.append('precio', precio);
        formData.append('categoria', categoria);
        formData.append('tamaño', tamaño);
        formData.append('temporada', temporada);
        formData.append('cantidad', cantidad);
        formData.append('genero', genero);
        formData.append('imagen', imagen);

        try {
            const response = await fetch('http://localhost:5173/api/productos', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                console.log('Producto creado exitosamente');
                setMostrarFormulario(false);
                resetFormulario();
            } else {
                console.error('Error al crear el producto');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };

    const resetFormulario = () => {
        setNombre('');
        setColor('');
        setDescripcion('');
        setPrecio('');
        setCategoria('');
        setTamaño('');
        setTemporada('');
        setCantidad('');
        setGenero('');
        setImagen(null);
    };

    return (
        <>
             <div className={`fixClasUser ${mostrarFormulario ? 'formVisible' : ''}`}>
                <Buttons content="Agregar Producto" customClass="AgregarProduct" key="addButton" Handler={handleMostrarFormulario} />

                {mostrarFormulario &&  (
                    <form className='fontxd' onSubmit={handleSubmit}>
                        <Titles text="Formulario" customClass="form-title" />
                        <div className='mozcont'>
                            <Titles text="Nombre" customClass="input-title" />
                            <Inputs type="text" placeholder="Nombre" customClass="input-field" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className='mozcont'>
                            <Titles text="Imagen 1" customClass="input-title" />
                            <Inputs type="file" placeholder="Seleccionar imagen" customClass="input-field" onChange={(e) => setImagen(e.target.files[0])} />
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
