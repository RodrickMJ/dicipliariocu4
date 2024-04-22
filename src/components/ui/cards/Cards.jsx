import React, { useState } from 'react';
import './cards.css';
import UpdateForm from '../UpdateForm/UpdateForm'; // Importa el componente UpdateForm desde otro archivo

function Cards({ customClass, imgPro, nombrePro, precioPro, IdProduct, productData }) {
    const [showForm, setShowForm] = useState(false);

    const handleUpdateClick = () => {
        setShowForm(true);
    };

    const handleEliminarClick = async () => {
        try {
            // Realiza la solicitud para eliminar el producto con la ID proporcionada
            const response = await fetch(`TU_API_URL/${IdProduct}`, {
                method: 'DELETE',
            });
            // Verifica si la solicitud se completó correctamente
            if (response.ok) {
                // Si se elimina con éxito, puedes hacer algo como redirigir a una página de confirmación o actualizar la lista de productos
                console.log('Producto eliminado con éxito');
            } else {
                // Si hay algún problema con la solicitud, puedes mostrar un mensaje de error al usuario
                console.error('Error al eliminar el producto');
            }
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };

    const handleSubmitForm = (event) => {
        // Aquí puedes manejar la lógica para enviar el formulario
        event.preventDefault();
        // Por ejemplo, podrías redirigir a la página del formulario en otro contenedor
        window.location.href = `/vProducto/${IdProduct}`;
    };

    return (
        <>
            <div className={customClass}>
                <div className='refco'>
                    <a href={`/vProducto/${IdProduct}`}><img src={imgPro} alt="imagen" /></a>
                </div>
                <div className='dscc'>
                    <h4>{nombrePro}</h4>
                    <p>$ {precioPro} mnx</p>
                    <div className='visUsProd'>
                        <button className='vProc'><b>Ver Producto</b></button>
                        <button className='acPro' onClick={handleUpdateClick}><b>Actualizar</b></button>
                        <button className='elPro' onClick={handleEliminarClick}><b>Eliminar</b></button>
                    </div>
                    {showForm && <UpdateForm handleSubmitForm={handleSubmitForm} productData={productData} />} {/* Pasa los datos del producto al componente UpdateForm */}
                </div>
            </div>
        </>
    );
}

export default Cards;
