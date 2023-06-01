import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import MySpinner from "../Spinner/Spinner"
import { db } from "../../servicios/firebase/firebaseConfig"
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = ({greeting})=> {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const categoriaId=useParams().categoriaId
    const [titulo,setTitulo]=useState("Productos")
  
  useEffect(() => {
    const productosCollection = collection(db, "articulos")
    const pedido = getDocs(productosCollection)

    if(categoriaId){
        const queryCollectionCategory = query(collection(db, "articulos"), where("categoria", "==", categoriaId))
        getDocs(queryCollectionCategory)
          .then(resp => setProductos(resp.docs.map(prod => (prod.data()))))
          .finally(() => setLoading(false))
          setTitulo(categoriaId)
		} else {
			pedido
        .then((resultado) => {resultado.docs.forEach(doc=> {
          const arrayResultado = resultado.docs.map((doc) => doc.data())
            setProductos(arrayResultado)
            setLoading(false)
            setTitulo("Productos")
					})
				})
        .catch(() => {
        console.error("Error al cargar productos");
				})
        .finally(() => {
          setLoading(false)
				})
		}
	}, [categoriaId])

    if(loading){
        return( 
        <div className="spinner pt-5">
            <MySpinner/>
        </div>
        )
      }else{
        return (
          <div>
              <h1 className=" listTitulo d-flex text-center justify-content-center">{greeting}</h1>
              <ItemList productos={productos} titulo= {titulo}/>
          </div>
    )
}}

export default ItemListContainer