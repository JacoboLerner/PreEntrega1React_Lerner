import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCounts"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({id,nombre,precio,descripcion,categoria,img,stock}) => {

    const [cantidadAgregada, setCantidadAgregada]=useState(0)
    const{ addItem,setCarrito} =useContext (CartContext)

    const handleOnAdd = (cantidad)=> {
        setCantidadAgregada(cantidad)
        const item ={id, nombre, precio,img, categoria, stock }
        addItem(item,cantidad)
    }
    return (
        <div className="container pt-5 pb-3 ">
            <div className="producto-detalle">
                <img className="px-4" src={img} alt={nombre} />
                <div>
                    <h2 className="titulo">{nombre}</h2>
                    <p className="descripcion"><i>{descripcion}</i></p>
                    <p className="categoria">Categoria: {categoria}</p>
                    <p className="precio">Precio:${precio}</p>
                    <div>
                        {cantidadAgregada > 0 ? (
                            <Link to="/cart" className="btn btn-warning justify-center" onClick={setCarrito}>Terminar Compra</Link>
                        ) : (
                            <ItemCount inicial ={1} stock ={stock} onAdd ={handleOnAdd}/>
                        )
                        }
                    </div>                    
                </div>
            </div>
        </div>
    )
    }

    
export default ItemDetail
