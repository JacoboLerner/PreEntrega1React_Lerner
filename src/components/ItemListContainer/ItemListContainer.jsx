import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import { getProductos } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting})=> {
    const [productos, setProductos]= useState([])

    useEffect(()=>{
        getProductos()
        .then (respuesta=> {
            setProductos(respuesta)
        })
        .catch(error =>{
            console.error(error)
        })
    },[])
    return (
        <div>
            <h1 className=" listTitulo d-flex text-center justify-content-center">{greeting}</h1>
            <h2 className=" listTitulo d-flex text-center justify-content-center pb-4">Productos</h2>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer