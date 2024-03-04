
import NavBar from "../Componentes/NavBar";
import SearchBar from "../Componentes/SearchBar";
import {GiShoppingBag} from "react-icons/gi"
import "./Men.css"
import Products from "../Componentes/Products";
import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";


function Men(){
   const {products}= useContext(ProductsContext);
   const { searchText, setSearchText } = useContext(ProductsContext);


    return(
        <div>
             <header className="Container" >
   
   <NavBar/>

   <SearchBar searchText={setSearchText}  />

   
  
</header>
           <main>

         <div className="CardMen">
           {products.filter((prod)=>prod.title.includes( "Men")&& 
           prod.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase() ))
.map((p)=>(
 <Products key={p.id} prod={p}/>
    ))}
    </div>

  

           </main>
        </div>
    )
}

export default Men ;