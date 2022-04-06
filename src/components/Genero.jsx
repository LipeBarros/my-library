
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import classes from "./Genero.module.css"

import { Navigation } from "swiper";
import { Card } from "./Card";

function Genero({ children }) {
  return (
    <div className={classes.genero}>
      <h2>Livros de Guerra2</h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={false}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
      </Swiper>

    </div>
  )
}

export { Genero }