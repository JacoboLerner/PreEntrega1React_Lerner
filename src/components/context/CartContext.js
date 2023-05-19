import { createContext, useState } from "react"

export const CartContext = createContext ()


export const CartProvider = ({children})=> {
    const [cartlist, setCartlist]=useState (JSON.parse(localStorage.getItem("carrito",))||[])
    const setCarrito=()=>{
        localStorage.setItem("carrito", JSON.stringify(cartlist));
    }
    const addItem =(item, cantidad)=> {
        isInCart(item.id)
        ? sumarCantidad(item, cantidad) 
        : setCartlist([...cartlist, {...item, cantidad}])
        localStorage.setItem("carrito", JSON.stringify(cartlist));
     }
    
    const removeItem = (itemId)=>{
        const cartActualizado = cartlist.filter(prod => prod.id !== itemId)
        setCartlist(cartActualizado)
        localStorage.setItem("carrito", JSON.stringify(cartActualizado));
    }

    const vaciarCart=()=>{
        setCartlist([])
        localStorage.setItem("carrito", JSON.stringify([]));
    }
    const isInCart=(itemId)=>{
        return cartlist.some(prod => prod.id === itemId)
    }
    const cartCounter = () => {
        const totalItems = cartlist.reduce((acc, item) => acc + item.cantidad, 0)
        return totalItems;
    }

    const sumarCantidad = (item, cantidad) => {
        const newProducts = cartlist.map((prod) => {
            if (prod.id === item.id) {
                const newProduct = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCartlist(newProducts);
        localStorage.setItem("carrito", JSON.stringify(newProducts));
    };

    const totalPrice = () => {
        let totalCarrito = 0;
        cartlist.forEach((prod) => {
            totalCarrito += prod.precio * prod.cantidad;
        });
        return totalCarrito;
    }

    return (
        <CartContext.Provider value ={{cartlist,setCarrito, totalPrice,cartCounter,addItem,sumarCantidad, removeItem, vaciarCart}}>
            {children}
        </CartContext.Provider>
    )
}
