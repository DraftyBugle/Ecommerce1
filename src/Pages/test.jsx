
import NavBar from "../Componentes/NavBar";
import SearchBar from "../Componentes/SearchBar";
import {GiShoppingBag} from "react-icons/gi"
import "./Men.css"
import Products from "../Componentes/Products";
import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";


function test(){
   const {products}= useContext(ProductsContext);
   const { searchText, setSearchText } = useContext(ProductsContext);


    return(
        <div>
             <header className="Container" >
   
   <NavBar/>

   <SearchBar searchText={setSearchText}  />

   <GiShoppingBag className="shopbag"/>
  
</header>
           <main>

         <div className="CardMen">
           {products.filter((prod)=>prod.id=== 18 && 
           prod.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase() ))
.map((p)=>(
 <Products key={p.id} prod={p}/>
    ))}
    </div>

  

           </main>
        </div>
    )
}

export default test ;