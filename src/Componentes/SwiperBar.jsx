import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Men from "../IMG/Men.png"
import AllStar from "../IMG/AllStar.png";
import Fly from "../IMG/Fly.png"
import NikeRevolution from "../IMG/NikeRevolution.jpg"
import White from "../IMG/White.png"

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./SwiperBar.css";

import {  Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

 function SwiperBar() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Men} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={White} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Fly} />
        </SwiperSlide>
     
      </Swiper>
    </>
  );
}
export default  SwiperBar;