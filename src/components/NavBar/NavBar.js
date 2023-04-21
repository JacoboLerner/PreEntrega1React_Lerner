import CartWidget from "../CartWidget/CartWidget"

const Navbar =()=>{
    return(
        <nav>
            <h3>La Tienda del Basket</h3>
            <div>
                <button type="button" className="btn btn-primary">Camisetas</button>
                <button type="button" className="btn btn-danger">Zapatillas</button>
                <button type="button" className="btn btn-warning">Accesorios</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar