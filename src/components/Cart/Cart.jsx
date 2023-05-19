import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart =()=>{
    const {cartlist,  vaciarCart, totalPrice, cartCounter}= useContext(CartContext)

    return (
        <section className="cartList mt-3 p-3">
                <h2 className='ml-5 fontDetail'><b>Carrito</b></h2>
                {cartlist.map(item => (CartItem ({item})))}
                <div className='totalprice-cart row p-3'>
                    {totalPrice() === 0
                        ? null 
                        : <h4 className='mr-5'>Precio total: ${totalPrice()}</h4>}
                    {cartCounter() === 0 
                    ?  <div className='ml-5 font-carrito p-'>
                            <p className='mr-5'>El carrito está vacio</p>
                            <Link to='/' className= "btn btn-outline-warning">Volver a Productos</Link> 
                        </div> 
                    : <div className="row gap-3"> <button className="col btn btn-outline-warning ml-5 text-center" onClick={() => { vaciarCart() }} >Vaciar Carrito</button>
                     <Link to='/' className="btn btn-outline-info ml-5 text-center col" >Agregar mas productos</Link> </div>}
                </div>
        </section>
        )
    }

export default Cart;