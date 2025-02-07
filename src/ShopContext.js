import { createContext, useReducer,useContext } from "react"
import shopReducer, { initialState } from "./shopReducer"

import { error } from "ajv/dist/vocabularies/applicator/dependencies";


const ShopContext = createContext(initialState);
export const ShopProvider = ({children})=>{
    const [state, dispatch]= useReducer(shopReducer,initialState);

    const AddToCart = (product)=>{
        
        const updatedProduct = state.products.concat(product);
        calculateTotal(updatedProduct);
        dispatch({
            type : "ADD_TO_CART",
            payload:{
                products: updatedProduct,
            }
        
        })
        
    }
    const RemoveProduct = (product) =>{
        const  updatedProduct = state.products.filter(p => p.id !== product.id);
        calculateTotal(updatedProduct);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedProduct,
            }
        })
    }

    const calculateTotal = (product)=>{
        let total = 0;
        product.forEach(pro => {
            total += pro.price;
            
        });
        dispatch({
            type: "CALCULATE_TOTAL",
            payload: total,
        })
    }
    const clearCart = () =>{
        dispatch({
            type: "CLEARCART",
            payload: {}
        })
    }
    const values = {
        products : state.products,
        total : state.total,
        AddToCart,
        RemoveProduct,
        clearCart
    }

    return <ShopContext.Provider value={values}>
        {children}
    </ShopContext.Provider>

}

const useShop = ()=>{
    const context = useContext(ShopContext);

    if(context === undefined){
        throw new error("must be defined the context before the child");
    }
    return context;
}
export default useShop;

