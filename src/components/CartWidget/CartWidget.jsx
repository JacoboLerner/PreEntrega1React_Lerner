import cart from "./assets/cart.png"

const CartWidget =()=>{
    return(
        <div className="px-3">
            <img src={cart} alt="carrito-widget" de compras/>
            <span className="badge text-bg-secondary">{0}</span>
        </div>
    )
}

export default CartWidget