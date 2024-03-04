

import { Swiper, SwiperSlide } from 'swiper/react';
//IMPORT CONTEXT
import React, { useContext, useRef, useState } from 'react';
import { ProductsContext } from '../Context/ProductsContext';
import Products from './Products';
import "./SwiperProducts.css";
// Import Swiper styles

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function SwiperProducts() {
  const {products}= useContext(ProductsContext);
  const filteredProducts = 
  products.slice (2, 10).filter((prod)=>prod.category.includes("clothing"));
  return (
    <>
      <Swiper
        slidesPerView={4}
         //Mediaq
          //Mediaq
          breakpoints={{
            // Cambiar slidesPerView a 1 en pantallas de hasta 768px
            100: {
              slidesPerView: 1,
            },
            500:{
              slidesPerView: 2,
            },
            800:{
              slidesPerView: 2,
            },
            1220:{
              slidesPerView: 4,
            }
          }}
        
      
        
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        
        className="mySwiper"
 

      >
   {filteredProducts.map((p)=>(
        <SwiperSlide  key={p.id}>

          <div className='SwiperImg'>

          <Products key={p.id} prod={p}/>

          </div>
          </SwiperSlide>))}

      </Swiper>
    </>
  );
}
