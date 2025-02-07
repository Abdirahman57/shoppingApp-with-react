import { useEffect, useState } from "react";
import  useShop  from "../ShopContext";

const Product = (product)=>{
    // console.log(product)
    const [isInCart, setIsInCart]=useState(false);
    const {AddToCart,RemoveProduct,products}=useShop();

    useEffect(()=>{
        const found = products.filter(p => p.id === product.id);
        if(found.length > 0){
            setIsInCart(true);
        }else{
            setIsInCart(false);}
    },[products])
    const handleAddToCart = ()=>{
        if(isInCart){
            RemoveProduct(product);
        }else{
            AddToCart(product);
        }
       
        console.log(products)
       
    }
    return(
       
            
        <div className="card" style={{
           
            backgroundImage:`url(${product.URLimage})`,
            


        }}>
            
           <div className="info">
           <h4>{product.name}</h4>
           <span>${product.price}</span>
            </div>
           <button className="btn btn-primary" onClick={handleAddToCart}>
                {
                    isInCart ? <i class="fa-solid fa-heart"></i> : 
                    <i class="fa-regular fa-heart"></i>

                }
                
                   
           </button>
           </div>
    )
}
export default Product;