import React, { useContext } from "react";//se importa react y el usecontext para poder usar el context que se usa globalmente
import { Link } from "react-router-dom";//se importa para darle direcciones a las paginas
import { ShoppingCart } from "phosphor-react";//se importa el shopping cart ya que desde el header se llama al shopping cart
import "./navbar.css";//se importa el css
import { ShopContext } from "../context/shop-context";//se importa el shop context que contiene funciones utilizadas en todas partes en la aplicacion
import { useNavigate } from "react-router-dom";//es para redireccionar

export const Navbar = () => {
    const context = useContext(ShopContext);//le damos las funciones del shop context a la variable context
    const navigate = useNavigate();
    const logout = () => {//redirige al login
        
        context.loggedChanger(false);//se cabia a true el hook que pone si esta logeado el usuario
        navigate(`/`);
    }

    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.png" alt="" />
            </div>
            <div className="navbar-left">
                {
                    !context.logged?
                        <div className="links"> 
                            <Link to="/"> Shop </Link> {/*redirige a la ruta raiz cuando se le da clic al texto de shop*/} 
                            <Link to="/login"> {/*se redirige al login si se le da clic al carrito*/}
                                <ShoppingCart size={32}/>{/*se llama al elemento shopping cart*/}
                            </Link>
                        </div>
                    :
                        !context.admin?
                            <div className="links"> {/*en caso de que este logeado se redirige igualmente al shop pero ahora cuando se le da clic al carrito redirecciona hacia el carrito*/}
                                <Link to="/shop"> Shop </Link>
                                <Link to="/cart">
                                    <ShoppingCart size={32}/>{/*se llama al elemento shopping cart*/}
                                </Link>
                                <h2 className="logout" onClick={(e) => { logout()}}> Logout </h2>
                            </div>
                        :
                            <div className="links"> {/*si el usuario es admin envia hacia el editor del inventario y hacia el editor del perfil del administrador*/}
                                <Link to="/editInventory"> Products </Link>
                                <Link to="/editAdmin"> Admin Profile </Link>
                                <p className="logout" onClick={(e) => { logout()}}> Logout </p>
                            </div>
                }
            </div>
        </div>
    )
};
