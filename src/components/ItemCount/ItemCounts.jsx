import { useState } from "react"
import "./ItemCount.css"




const ItemCount =({stock,inicial, onAdd})=>{
    const [cantidad, setCantidad]= useState (inicial)

    const sumar =()=>{
        if (cantidad <stock){
            setCantidad(cantidad + 1)
        }
    }

    const restar =()=> {
        if (cantidad >1){
            setCantidad(cantidad - 1)
        }
    }

    return(
        <div className="Counter container w-25 pt-4">
            <div className="Controls row">
                <button className="btn btn-outline-primary col-2" onClick={restar}>-</button>
                <h4 className="Number text-center col">{cantidad}</h4>
                <button className="btn btn-outline-primary col-2 col-2" onClick={sumar}>+</button>
            </div>
            <div className="row pt-4">
                <button className="btn btn-primary justify-center" onClick={()=> onAdd(cantidad
                    )} disabled ={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount