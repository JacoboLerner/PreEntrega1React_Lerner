import Item from "../Item/Item"

const ItemList =({productos})=>{
    return(
        
        <div className="container  text-center pt-3">
            <div className="row gap-3"> 
            {productos.map(prod=><Item key ={prod.id}{...prod}/>)}
            </div>
        </div>
    )
    
}

export default ItemList