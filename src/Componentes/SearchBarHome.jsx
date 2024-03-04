import React from 'react';
import "./SearchBarHome.css"
import {AiOutlineSearch} from "react-icons/ai"

import {  useNavigate } from 'react-router-dom';
import { useState } from "react";
function SearchBarHome(){
    const history = useNavigate ();
const [searchText, setSearchText] = useState('');
   
    const handleSearch = (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario.
        
        // Redirige a la página de resultados con la cadena de búsqueda como parámetro.
        history(`/Results?query=${searchText}`);
      };
return(

    <div>
    <form onSubmit={handleSearch} className='formhome'>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value) }
        placeholder="Search"
      />
      <AiOutlineSearch className="search-iconHome"  />
    </form>
  </div>

)
}
export default SearchBarHome;