import { useState } from "react"
import ItemCount from "../ItemCount/ItemCounts"
import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {
    const [cantidadAgregada, setCantidadAgregada]=useState(0)

    const handleOnAdd = (cantidad)=> {
        setCantidadAgregada(cantidad)
    }
    return (
        <div className="container pt-5 pb-3 ">
            <div className="producto-detalle">
                <img className="px-4" src={item.img} alt={item.nombre} />
                <div>
                    <h2 className="titulo">{item.nombre}</h2>
                    <p className="descripcion"><i>{item.descripcion}</i></p>
                    <p className="categoria">Categoria: {item.categoria}</p>
                    <p className="precio">Precio:${item.precio}</p>
                    <div>
                        {
                            cantidadAgregada > 0 ? (
                                <Link to="/cart" className="btn btn-warning justify-center">Terminar Compra</Link>
                            ) : (
                                <ItemCount inicial ={1} stock ={item.stock} onAdd ={handleOnAdd}/>
                            )
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
    }

    
export default ItemDetail
