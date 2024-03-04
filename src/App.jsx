
import { BrowserRouter,Routes, Route } from "react-router-dom";
import React from 'react'
import NavBar from "./Componentes/NavBar";
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Woman from "./Pages/Woman";
import Accesory from "./Pages/Accesory";
import Results from "./Pages/Results";
import Test from "./Pages/test";
import Cart from "./Pages/Cart";
import SearchBar from "./Componentes/SearchBar";
import './App.css'
import { ProductsContextProvider } from "./Context/ProductsContext";



function App() {


  return (
  <BrowserRouter>
  <ProductsContextProvider>
  <Routes>
  <Route path="/" element={<Home/>} >  </Route> 
    <Route path="/Men" element={<Men/>} >  </Route> 
    <Route path="/Woman" element={<Woman/>}> </Route> 
    <Route path="/Accesory" element={<Accesory/>}> </Route> 
    <Route path="/Results" element={<Results/>}> </Route> 
    <Route path="/test" element={<Test/>}> </Route> 
<Route path="Cart" element={<Cart/>}>  </Route>

    <Route path="*" element={<h3> Ruta No existe </h3>}> </Route> 
  </Routes>
  </ProductsContextProvider>
  </BrowserRouter>
  )
}

export default App
