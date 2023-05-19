import { useContext } from "react"
import carrito from "./assets/cart.png"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget =()=>{
    const {cartCounter}=useContext(CartContext)
    return(
        <div className="px-3">
            <Link to="/cart" style={{display : cartCounter() >0 ? "block" : "none"}}>
                <img src={carrito} alt="carrito-widget" />
                <span className="badge text-bg-secondary">{cartCounter()}</span>
            </Link>
        </div>
    )
}

export default CartWidget