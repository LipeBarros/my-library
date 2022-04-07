
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import classes from "./Genero.module.css"


import { Navigation } from "swiper";
import { Card } from "./Card";

function Genero({ titulo }) {
  return (
    <div className={classes.genero}>
      <h2>{titulo}</h2>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={3}
        loop={false}
        navigation={true}
        modules={[Navigation]}
        className={classes.meuSwiper}
      >
        <SwiperSlide className={classes.slide}>
          <Card autor="Sun Tzu" titulo="A Arte da Guerra" imagem="./livro2.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <Card autor="Mary Shelley" titulo="Frankestein" imagem="./livro.webp" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <Card autor="John Green" titulo="A Culpa é das Estrelas" imagem="./frankestein.webp" />
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export { Genero }