import { useEffect, useState } from "react"
import { pedirItemPorID } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import MySpinner from "../Spinner/Spinner";



const ItemDetailContainer = () => {
    const[item, setItem] =useState(null);
    const id = useParams().id;
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        pedirItemPorID(Number(id))
        .then((res)=>{
        setItem(res);
    })
    .finally(() => setLoading(false))
    },[id])

    if(loading){
      return( 
        <MySpinner/>
      )
    }else{
    return (
    <div>
      {item && <ItemDetail id={item.id} nombre={item.nombre} img={item.img} categoria={item.categoria} stock={item.stock} precio={item.precio} descripcion={item.descripcion}/>}
    </div>
  )
}}

export default ItemDetailContainer 