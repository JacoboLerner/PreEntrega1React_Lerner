import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Link, useParams } from "react-router-dom";
import MySpinner from "../Spinner/Spinner";
import { db } from "../../servicios/firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const[item, setItem] =useState(null);
    const id = useParams().id;
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      setLoading(true)
      const docRef =doc (db, "articulos", id)

      getDoc(docRef)
      .then(response => {
        const data =response.data()
        const itemAdapted ={ id: response.id,...data}
        setItem(itemAdapted)
        console.log(itemAdapted)
      })
      .catch(error=>{console.log(error)
      })
      .finally(() => {setLoading(false)
      })
    },[id])

    if(loading){
      return( 
        <MySpinner/>
      )
    }else if(!item.nombre){
      return (
      <div className="p-3 detallle">
        <h2>¡Hubo un error en la busqueda de su producto!</h2>
        <Link to='/' className= "btn btn-outline-warning">Volver a Productos</Link>
      </div>
    )
  }else{
    return (
    <div className="detallle">
      {item && <ItemDetail id={item.id} nombre={item.nombre} img={item.img} categoria={item.categoria} stock={item.stock} precio={item.precio} descripcion={item.descripcion}/>}
    </div>
  )
}}

export default ItemDetailContainer 