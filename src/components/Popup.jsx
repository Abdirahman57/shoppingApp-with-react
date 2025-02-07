import { Link } from "react-router";
import useShop from "../ShopContext";


const Popup = ({setShow})=>{
    const {products}= useShop();
    if(products.length <= 0){
        <></>
    } else
    return(
        <div className="cart-menu">
            {products.map((product)=>(
                
            //    <Items product={product}/>
            <div className="items">
        <img src={product.URLimage} alt="sawir" className="lits-items-img"/>
        
         <span>${product.price}</span>
          <h4>{product.name}</h4>
          

   </div>
            ))}
            
            {/* <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Cart">Cart</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
            </div> */}
    

<button className="btn btn-close" ><i class="fa-solid fa-x"></i></button>
        </div>
    )
}
export default Popup;