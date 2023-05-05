import { useEffect, useState } from "react"
import { pedirItemPorID } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = ({itemId}) => {
    const[item, setItem] =useState(null);
    useEffect(()=>{
        pedirItemPorID(itemId)
        .then((res)=>{
        setItem(res);
    })
    },[itemId])

  return (
    <div>
      {item && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer