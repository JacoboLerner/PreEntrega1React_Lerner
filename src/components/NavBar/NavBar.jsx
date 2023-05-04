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
                <img src={logo2} alt="Logo" width="40" height="24" className="d-inline-block align-text-top"/>
                <a className="navbar-brand bg-body-tertiary p-2 text-uppercase fw-bolder titulo" href="#">La Tienda del Basket</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item p-2">
                            <button {...botone} >Camisetas</button>
                        </li>
                        <li className="nav-item p-2">
                            <button {...botone}>Zapatillas</button>
                        </li>
                        <li className="nav-item p-2">
                            <button {...botone}>Accesorios</button>
                        </li>
                    </ul>  
                    <CartWidget/>   
                </div>               
            </div>
        </nav>
    )
}

export default Navbar