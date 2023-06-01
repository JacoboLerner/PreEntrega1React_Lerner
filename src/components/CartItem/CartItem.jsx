import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const CartItem =({item})=>{
    const { removeItem}= useContext(CartContext)

    return (
        <div className="row g-0 ml-5 mb-3 p-4 mt-3 cart-item rounded">
            <div className="col-md-3">
                <img src={item.img} className="img-fluid rounded img-cart " alt={item.descripcion}/>
            </div>
            <div className="col-md-8">
                <div className="card-body" key={item.id}>
                    <h5 className="card-title">{item.titulo}</h5>
                    <div className="row">
                        <p className="ml-3 mr-5">{item.cantidad} x ${item.precio}</p>
                        <p>Total Parcial : ${item.cantidad * item.precio}</p>
                    </div> 
                    <button className= 'btn btn-danger' onClick={() => removeItem(item.id)} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-trash' viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button>
                    <hr className='mt-5'></hr>
                </div>
            </div> 
        </div>
    );
    }

export default CartItem