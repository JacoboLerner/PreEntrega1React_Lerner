import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import { getProductos } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting})=> {
    const [productos, setProductos]= useState([])
    const [titulo,setTitulo]=useState("Productos")
    const categoriaId=useParams().categoriaId

    useEffect(()=>{
        getProductos()
        .then (respuesta=> {
            if (categoriaId){
                setProductos(respuesta.filter((prod)=> prod.categoria === categoriaId));
                setTitulo(categoriaId);
            } else{
                setProductos(respuesta)
                setTitulo("Productos");
            }
            
        })
        .catch(error =>{
            console.error(error)
        })
    },[categoriaId])
    return (
        <div>
            <h1 className=" listTitulo d-flex text-center justify-content-center">{greeting}</h1>
            <ItemList productos={productos} titulo= {titulo}/>
        </div>
    )
}

export default ItemListContainer