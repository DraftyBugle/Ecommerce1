import React from "react";
import NavBar from "../Componentes/NavBar";
import SearchBar from "../Componentes/SearchBar";
import {GiShoppingBag} from "react-icons/gi"
import "./Woman.css"
import Products from "../Componentes/Products";

import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";

function Woman(){
    const {products}= useContext(ProductsContext);
    const { searchText, setSearchText } = useContext(ProductsContext);
    return(
        <div>
             <header className="Container" >
   
   <NavBar/>

   <SearchBar searchText={setSearchText}/>


  
</header>
<main>
    <div className="CardWoman"> 
{products.filter((prod)=>prod.category.includes("women") &&prod.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) )
.map((p)=>(
 <Products key={p.id} prod={p}/>
    ))}
    </div>
</main>



        </div>
    )
}

export default Woman;