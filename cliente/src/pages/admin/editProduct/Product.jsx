import React from "react";
import { useState } from "react";
import './editProduct.css';
import axios from 'axios';

const URI = 'http://localhost:3001/products/';//aqui se hacen las peticiones 

export const Product = (props) => {
    const { id, nombre, precio, img1, img2, img3, stockMax, stockMin } = props.data; //aqui se guardan los datos de los productso
    const [priceHook, setPrice] = useState(''); //hook para el precio del producto
    const [maxStock, setMaxS] = useState('');//hook para el stock maximo
    const [minStock, setMinS] = useState('');//hook para el stock minimo
    

    const update = async (e) => {//funcion para actualizar un producto a partir del id 
        e.preventDefault();
        await axios.put(URI+id+'/', { precio: priceHook, stockMax: maxStock, stockMin: minStock });
    }

    return (
        <div className="product">
            <div className="slide-var">
                <ul>
                    <li><img src={'./productos/producto.png'} alt={nombre}/></li>{/*carrousel de las imagenes */}
                    <li><img src={'./productos/producto.png'} alt={nombre}/></li>
                    <li><img src={'./productos/producto.png'} alt={nombre}/></li>
                </ul>
            </div>
            <div className="description"> 
                <p> 
                    <b>{nombre}</b> {/*se muestra toda la informacion de los productos */}
                </p>
                <p> ${precio}</p>
                <div className="stock">
                    <p> Max Stock: {stockMax}</p>
                    <p> Min Stock: {stockMin}</p>
                </div>
                <form className="form-edit-product" onSubmit={update} action="/auth" method="post"> {/*al momento de enviar el formulario se llama a la funcion update para actualizar el producto */}
                    <input className="input-form"
                    onChange={ (e) => setPrice(e.target.value)} /* se guarda el valor ingresado del input dentro de price */
                    type="text" name="pass" id="pass" placeholder="New Price"/>
                    <input className="input-form"
                    onChange={ (e) => setMaxS(e.target.value)} /*se ingresa el valor ingresado del input dentro de maxstock */
                    type="text" name="pass" id="pass" placeholder="New Max stock"/>
                    <input className="input-form"
                    onChange={ (e) => setMinS(e.target.value)} /*se ingresa el valor ingresado del input dentro de setMins*/
                    type="text" name="pass" id="pass" placeholder="New Min stock"/>
                    <input type="submit" className="btn-login submit-edit" value="Edit" /> {/*boton para mandar el formulario */}
                </form>
            </div>
        </div> 
    );
};