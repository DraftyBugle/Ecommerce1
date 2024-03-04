import React from "react";
import NavBar from "../Componentes/NavBar";
import SearchBarHome from "../Componentes/SearchBarHome";
import {GiShoppingBag} from "react-icons/gi"
import Products from "../Componentes/Products";
import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


function Results(){
    const {products}= useContext(ProductsContext);
   const { searchText,setSearchText } = useContext(ProductsContext);

   const [searchResults, setSearchResults] = useState([]);
   const location = useLocation();
 
   useEffect(() => {
    // Obtiene el término de búsqueda de la URL.
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');

    // Filtra los productos basados en el término de búsqueda.
    const filteredResults = products.filter((prod) =>
    prod.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
   

    setSearchResults(filteredResults);
  }, [products, location]);


    return(
        
        
        <div>
             <header className="Container" >
   
   <NavBar/>

   <SearchBarHome searchText={setSearchText}/>

   
  
</header>
           <main>

         <div className="CardMen">
            {
            searchResults.map((p)=>(
             <Products key={p.id} prod={p}/>
    ))}
    </div>
           </main>
        </div>

    
    )
}

export default Results;





