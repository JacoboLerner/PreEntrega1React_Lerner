import Item from "../Item/Item"

const ItemList =({productos})=>{
    return(
        
        <div className="container-fluid text-center pt-3">
            <div className="row gap-3 m-0 d-flex  justify-content-center"> 
            {productos.map(prod=><Item key ={prod.id}{...prod}/>)}
            </div>
        </div>
    )
    
}

export default ItemList