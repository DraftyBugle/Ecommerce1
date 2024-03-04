import React from "react";
import NavBar from "../Componentes/NavBar";
import SearchBar from "../Componentes/SearchBar";

import "./Home.css"
import SwiperBar from "../Componentes/SwiperBar";
import SwiperProducts from "../Componentes/SwiperProducts";
import SearchBarHome from "../Componentes/SearchBarHome";

//Imagenes 
import back from "../IMG/mochila.png"
import tshirt from "../IMG/remera.png"
import shoe from "../IMG/zapatilla.png"
//Footer
import Footer from "../Componentes/Footer";

function Home(){
  

    return(
    <div>
     <header className="Container" >
   
        <NavBar/>
  
        <SearchBarHome className="bar"/> 
       
       
     </header>
     <main>

    <SwiperBar className="Swiper"/>
    <div className="look" >  
         <h2 className="titlesummer">SUMMER LOOKS</h2>
         <div className="buy">  
          <button >BUY NOW</button>  
           </div>

     </div>

<div className="postersummer">


<img src={tshirt}  className="ts"/>

<img src={back} className="back" />

<img src={shoe}  className="shoe"/>

</div>

<h3 className="FeaturedPro">Featured Products</h3>
   <SwiperProducts/>
        
     </main>
     <footer >

<Footer/>
    

     </footer>
     </div>
       
    )
}

export default Home ;