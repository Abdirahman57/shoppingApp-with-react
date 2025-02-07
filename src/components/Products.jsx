import Product from "./Product";


const Products = ({products}) =>{
    return (
        <div className="grid">
            {
       
           products.map((product,index)=>
           <Product key={index} {...product}/>
           
           
       )}
        </div>
    )
}
export default Products;