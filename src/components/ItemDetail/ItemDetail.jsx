import ItemCount from "../ItemCount/ItemCounts"

const ItemDetail = ({item}) => {
    return (
        <div className="container pt-5 pb-3 ">
            <div className="producto-detalle">
                <img className="px-4" src={item.img} alt={item.nombre} />
                <div>
                    <h2 className="titulo">{item.nombre}</h2>
                    <p className="descripcion"><i>{item.descripcion}</i></p>
                    <p className="categoria">Categoria: {item.categoria}</p>
                    <p className="precio">Precio:${item.precio}</p>
                    <ItemCount inicial ={1} stock ={item.stock} onAdd ={(cantidad)=> console.log("Cantidad agregada", cantidad)}/>
                </div>
            </div>
        </div>
    )
    }

    
export default ItemDetail
