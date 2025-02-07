
import Popup from "../components/Popup";
import Products from "../components/Products";

const Home = ()=>{
    const Visible = {
        visibiliry : "visible"
    }
    const products = [
        {
            
            id: 1,
            price: 100,
            name: "i Pad",
           URLimage: "https://images.pexels.com/photos/16150335/pexels-photo-16150335/free-photo-of-unlock-the-power-of-apple-gadgets-to-unleash-your-creativity.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            
            id: 2,
            name: "Mac Book",
            price: 300,
           URLimage: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            
            id: 3,
            name: "i Keyboard",
            price: 1300,
           URLimage: "https://images.pexels.com/photos/3944384/pexels-photo-3944384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            
            id: 4,
            price: 100,
            name: "i Mack Desktop",
           URLimage: "https://images.pexels.com/photos/5082568/pexels-photo-5082568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            
            id: 5,
            name: "HeadPhones",
            price: 300,
           URLimage: "https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            
            id: 6,
            name: "iphone 16 Pro Max",
            price: 1300,
           URLimage: "https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          
    ];
    return(
    <>
        <Products products={products}/>
      
        
    </>
    );
}
export default Home ;