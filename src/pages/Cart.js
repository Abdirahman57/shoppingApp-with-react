import CartProduct from "../components/CartProduct";
import Payments from "../components/Payments";
import useShop from "../ShopContext";

const Cart = () =>{
    const {products} = useShop();
    if(products.length ===0) {
        return <h2> There is no Products in the list</h2>;
   }else 
    return (
        <div className="cart-container">
            <CartProduct/>
            <Payments/>
        </div>
    )
}
export default Cart;