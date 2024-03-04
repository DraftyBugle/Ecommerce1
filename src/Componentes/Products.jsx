import "./Products.css";
import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";

const Products=({prod})=>{
   const{addToCart} = useContext (ProductsContext)
   const{sumar} = useContext (ProductsContext)
    return (
        <div key={prod.id} className="Card">
           

   
         <img src={prod.image} alt="" />
    
         <p className="title"> {prod.title}</p>
         <p className="Category">{prod.category}</p>
         <p className="price">${prod.price}</p>
        <div>  
        <button 
        onClick={()=> addToCart(prod)}  
        className="add">
            AddToCard</button> </div>
        
        <div>   <button className="buynow" >But Now</button>   </div>
        
    
   
       
       </div>
        
    )
}


export default Products;