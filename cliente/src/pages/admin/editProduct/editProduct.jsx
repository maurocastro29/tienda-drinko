import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Navbar } from '../../../components/navbar';
import { ProductEdit } from '../../../components/producto/productoEdit';

const URI = 'http://localhost:3001/products/'; //aqui se hacen las peticiones

export const EditProduct = () => {

    const[products, setProducts] = useState([]) // aqui se guardan los productos
    useEffect(() => {
        getProduct()
    }, []);

    const getProduct = async () => {//aqui se hace la solicitud
        const res = await axios.get(URI)
        setProducts(res.data)
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="shop">
                <div className="shopTitle">
                    <h1>Edit Products</h1>
                </div>
                <div className="products"> 
                    {products.map((product) => (
                        <ProductEdit data={product} />// se muestran todos los productos que estan en el arreglo
                    ))}
                </div>
            </div>
        </div>
    )
};