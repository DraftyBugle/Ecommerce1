import React, { useContext } from "react";
import "./SearchBar.css";
import {AiOutlineSearch} from "react-icons/ai"

import { ProductsContext } from "../Context/ProductsContext";

const SearchBar = ()=>{

    
    const { searchText, setSearchText } = useContext(ProductsContext);
    
    const handleSearch =(e)=>{
   
       
        setSearchText(e.target.value);
    
     }
    
    
     
    return(
        <div>  
        <form  >
            <input  className="Bar"
             value={searchText}
             onChange= {handleSearch}
            type="text" 
             id="search"
            name="search"
            placeholder="Search"
            
            />
           <AiOutlineSearch className="searchicon"/>
        </form>
        </div>
    );

}
export default SearchBar