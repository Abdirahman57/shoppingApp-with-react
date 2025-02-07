import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import { useContext, useReducer } from "react";
import Products from "./components/Products";

export const initialState= {


    products : [],
    total: 0
    
};

const shopReducer = (state,action) =>{
    const {type, payload} = action;
    switch (type) 
    {
        case 'ADD_TO_CART':
            return {
                ...state,
                products: payload.products,
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                products: payload.products,
            }
        case 'CALCULATE_TOTAL':
            return{
                ...state,
                total: payload,
            }
        case 'CLEARCART':
            return initialState;
            default:
             throw new Error("Unknown reducer");
    }


}
export default shopReducer;