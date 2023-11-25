import React, { useContext } from "react";//se importa react y el usecontext para poder usar el context que se usa globalmente
import { Link } from "react-router-dom";//se importa para darle direcciones a las paginas
import { ShoppingCart } from "phosphor-react";//se importa el shopping cart ya que desde el header se llama al shopping cart
import "./producto.css";//se importa el css
import { ShopContext } from "../../context/shop-context";//se importa el shop context que contiene funciones utilizadas en todas partes en la aplicacion
import { useNavigate } from "react-router-dom";//es para redireccionar

export const Producto = (props) => {
    const context = useContext(ShopContext);//le damos las funciones del shop context a la variable context
    const { nombre, precio, descripcion, img1, img2, img3 } = props.data; //se le da valor a las variables en funcion de lo que se saca de la base de datos
    
    
    return (
        <div className="producto"> {/*aqui se muestran las informaciones de los productos en la pagina principal */}
            <div className="slide-var">
                <ul>
                    <li><img src="./productos/producto.png" alt={nombre}/></li>{/*este es el carrusel para las imagenes */}
                    <li><img src="./productos/producto.png" alt={nombre}/></li>
                    <li><img src="./productos/producto.png" alt={nombre}/></li>
                </ul>
            </div>
            <div className="descripcion-p">
                <p>{descripcion}</p>
            </div>
            <div className="description-p"> 
                <p> 
                    <b>{nombre}</b> 
                </p>
                <p> ${precio}</p>
            </div>
        </div> 
    );
};
