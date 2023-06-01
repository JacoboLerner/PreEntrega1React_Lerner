import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { toast } from 'react-toastify'
import { db } from "../../servicios/firebase/firebaseConfig"
import { addDoc, collection, documentId, getDocs, query, serverTimestamp, where, writeBatch } from "firebase/firestore"
import { Link } from 'react-router-dom'

const Checkout = () => {
    const {cartlist,  vaciarCart, totalPrice}= useContext(CartContext)
    const [client, setClient] = useState({ nombre: "", telefono: "", email: "" })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient({...client,[name]: value})
        }

        const endPurchase = () => {
        const orden = {
            client,
            items: cartlist,
            date: serverTimestamp(),
            total: totalPrice()
            }
            
    
        const ordenesCollection = collection(db, "ordenes")
        const pedido = addDoc(ordenesCollection, orden)

        if (client.nombre && client.telefono && (client.email === client.email_2)) {
            pedido
            .then(res => {
                toast.success("Compra exitosa!" + " Número de orden: " + res.id, {
                    position: "top-right",
                    autoClose: 15000,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    })
                toast.success("¡Gracias por su Compra!")
                console.log(res.id)
            })
            .catch(error => {
                toast.error("hubo un error!")
            })
            .finally(() => {
                vaciarCart()
            })
        } else if(client.email != client.email_2) {
            toast.error("Verifique su mail correctamente")
        }else {
            toast.error("Por favor complete sus datos")
        }
        }  

    return (
    <div className="mt-4 mb-4 ml-5 p-3 rounded botones-cart container">
                    <h1 className='mr-5'>Precio total: ${totalPrice()}</h1>
                    <h2 >Datos para confirmar la compra</h2>
                    <form className="form ml-5">
                        <div className="form-group">
                            <label htmlFor="nombre" className='p-2'>Nombre</label>
                            <input value={client.nombre} name="nombre" className='form-control' type="text" id="nombre" onChange={handleChange} />
                            <label htmlFor="telefono" className='p-2' >Teléfono</label>
                            <input value={client.telefono} name="telefono" id="telefono" className='form-control' type="number" onChange={handleChange} />
                            <label htmlFor="email" className='p-2' >Email</label>
                            <input value={client.email} name="email" id="email" type="email" className='form-control' onChange={handleChange} />
                            <label htmlFor="email " className='p-2'>Confirmacion de Email</label>
                            <input value={client.email_2} name="email_2" id="email_2" type="email" className='form-control' onChange={handleChange} />
                        </div>
                    </form>
                    <div>
                        {
                        ((client.email != client.email_2)||(!client.nombre || !client.telefono)) ? (
                            <button className="btn btn-outline-primary text-center mt-5 ml-5" onClick={() => endPurchase()}>Finalizar Compra</button>
                        ) : (
                            <Link to="/" className="btn btn-outline-primary text-center mt-5 ml-5" onClick={() => endPurchase()}>Finalizar Compra</Link>
                        )
                        }
                    </div>    
    </div>
    )
}

export default Checkout