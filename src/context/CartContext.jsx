import { createContext,useState } from "react";

export const CartContext= createContext()

export const CartProvider= ({children})=>{
    const [cart,setCart]=useState ([])
    const addItem=(item,cantidad)=>{
        if(isInCart(item.id)){
            const newCart = cart.map((prod)=> {
                if(prod.id === item.id){
                    return {...prod, qty: prod.qty + cantidad}
                }else{
                    return prod
                }
            })
            //actualizar el carrito
            setCart(newCart)

        }else{
            setCart([...cart,{...item,qty:cantidad}])
        }
        
    }
    const isInCart=(id)=>{
        //aplico some para devolver un booleano
        return cart.some((item)=> item.id ===id)
    }
    // borra todos los productos del carrito
    const clear = () =>{
        setCart([])
    }
    // elimina un producto específico del carrito según su id
    const removeItem = (id) =>{
        setCart(cart.filter((prod) => prod.id !== id))
    } 
    // calcular el precio total del carrito
    const cartTotal = () =>{
        return cart.reduce((acc, prod)=> (acc += prod.precio * prod.qty),0)
    }
    // calcula la cantidad total de productos en el carrito
    const cartQty = () =>{
        return cart.reduce((acc, prod)=> (acc += prod.qty), 0)
    }




    return(
        <CartContext.Provider value={{cart,addItem,clear,removeItem,cartTotal,cartQty}}>
            {children}
        </CartContext.Provider>

    )

}
