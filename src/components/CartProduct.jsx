import useShop from "../ShopContext";


const CartProduct = () =>{

    
   const  {products,RemoveProduct,total}=  useShop();

   
   
    return (
        <div className="cart-products">
            <h1 className="product-title">Cart Products</h1>
            {
               products.map((product)=>(

                <div className="cart-product">
                    <div className="title-img-span">
                        
                        <img src={product.URLimage} alt="product" />
                        <span>{product.name}</span>

                    </div>
                    <h5 className="item-price">
                       $ {product.price}
                    </h5>
                    <span className="btn-delete" onClick={()=>
                       RemoveProduct(product)
                        
                    }><i class="fa-solid fa-x"></i></span>

                    
                </div>
                
               )


               )

                
            }
                <div className="total-price">
                    <h2 className="total-price">Total price:${total}</h2>
                </div>
        </div>
    )
}
export default CartProduct;