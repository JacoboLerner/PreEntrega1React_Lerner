import toCapital from "../../herramientas/mayuscula"
import Item from "../Item/Item"

const ItemList =({productos,titulo})=>{
    return(
        
        <div className="container-fluid text-center pt-1">
            <h2 className=" listTitulo d-flex text-center justify-content-center pb-4 greeting">{toCapital(titulo)}</h2>
            <div className="row gap-3 m-0 d-flex  justify-content-center"> 
            {productos.map(prod=><Item key ={prod.id}{...prod}/>)}
            </div>
        </div>
    )
    
}

export default ItemList