import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";
const ProductsList = () =>{
    const {products, isLoading,error}= useContext(ProductsContext);
    if(isLoading)
    return(
<div>
    <h1>Cargando</h1>
</div>
);
if (error)
return (
    <div>
        <h2>{error}</h2>
    </div>
);
return(
    products?.length && (
        <>
        {products.map((p)=>(
            <p key={p.id}>
                 {p.title} 
                 <img src={p.image} alt="" />
                 </p>
        ))
    
        }
        </>
    )
)
}
export default ProductsList;