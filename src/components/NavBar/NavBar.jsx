import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"
import logo2 from "./assets/logo2.png"
import './NavBar.css';

let botone ={
    type :"button" ,
    className :"btn  btn-outline-primary btn-warning"
}

const Navbar =()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary navegador">
            <div className="container-fluid">
                <Link to="./">
                <img src={logo2} alt="Logo" width="40" height="24" className="d-inline-block align-text-top"/>
                </Link>
                <Link className="navbar-brand bg-body-tertiary p-2 text-uppercase fw-bolder titulo" to="/">La Tienda del Basket</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item p-2">
                            <Link to="./">
                                <button {...botone} >Inicio</button>
                            </Link>      
                        </li>
                        <li className="nav-item p-2">
                            <Link to="./productos">
                                <button {...botone} >Productos</button>
                            </Link>      
                        </li>
                        <li className="nav-item p-2">
                            <Link to="/categorias/camisetas">
                                <button {...botone} >Camisetas</button>
                            </Link>      
                        </li>
                        <li className="nav-item p-2">
                            <Link to="/categorias/zapatillas">
                                <button {...botone} >Zapatillas</button>
                            </Link>      
                        </li>
                        <li className="nav-item p-2">
                            <Link to="/categorias/accesorios">
                                <button {...botone} >Accesorios</button>
                            </Link>      
                        </li>
                    </ul>  
                    <CartWidget/>   
                </div>               
            </div>
        </nav>
    )
}

export default Navbar