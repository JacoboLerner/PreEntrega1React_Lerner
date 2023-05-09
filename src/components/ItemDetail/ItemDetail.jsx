import ItemCount from "../ItemCount/ItemCounts"

const ItemDetail = ({item}) => {
    return (
        <div className="container pt-3 pb-3 ">
            <div className="producto-detalle">
                <img src={item.img} alt={item.nombre} />
                <div>
                    <h3 className="titulo">{item.titulo}</h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">Categoria: {item.categoria}</p>
                    <p className="precio">Precio:${item.precio}</p>
                    <ItemCount inicial ={1} stock ={item.stock} onAdd ={(cantidad)=> console.log("Cantidad agregada", cantidad)}/>
                </div>
            </div>
        </div>
    )
    }

    
export default ItemDetail
