import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"


const Cart =()=>{
    const {cartlist,  vaciarCart, totalPrice, cartCounter}= useContext(CartContext)
    return (
        <section className="cartList mt-3 p-3 carrito-listado">
                <h2 className='ml-5 fontDetail'><b>Carrito</b></h2>
                {cartlist.map(item => (CartItem ({item})))}
                <hr className='mt-1'></hr>
                <div className='totalprice-cart row p-3'>
                    {totalPrice() === 0 ? null : <h3 className="mr-5 p-3 botones-cart rounded">Precio total: ${totalPrice()}</h3>}
                    {cartCounter() === 0 
                    ?  <div className='ml-5 font-carrito p-3'>
                            <p className='mr-5'>El carrito está vacio</p>
                            <Link to='/' className= "btn btn-outline-warning">Volver a Productos</Link> 
                        </div> 
                    : <div className="row gap-3 "> <button className="col btn btn-outline-warning ml-5 text-center" onClick={() => { vaciarCart() }} >Vaciar Carrito</button>
                    <Link to="/" className="btn btn-outline-info ml-5 text-center col" >Agregar mas productos</Link>
                    <Link to="/checkout" className="btn btn-outline-primary ml-5 text-center col-12" >Ir a Finalizar compra</Link> </div>}
                </div>
        </section>
        )
    }

export default Cart;
