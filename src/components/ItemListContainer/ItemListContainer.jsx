import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import { getProductos } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting})=> {
    const [productos, setProductos]= useState([])
    const [titulo,setTitulo]=useState("Productos")
    const categoria=useParams().categoria

    useEffect(()=>{
        getProductos()
        .then (respuesta=> {
            if (categoria){
                setProductos(respuesta.filter((prod)=> prod.categoria === categoria));
                setTitulo(categoria);
            } else{
                setProductos(respuesta)
                setTitulo("Productos");
            }
            
        })
        .catch(error =>{
            console.error(error)
        })
    },[categoria])
    return (
        <div>
            <h1 className=" listTitulo d-flex text-center justify-content-center">{greeting}</h1>
            <ItemList productos={productos} titulo= {titulo}/>
        </div>
    )
}

export default ItemListContainer