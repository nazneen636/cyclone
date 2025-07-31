// Import Swiper React components
import React from "react";
import { Swiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  EffectCube,
  Autoplay,
  EffectFlip,
  EffectCards,
  EffectCoverflow,
  EffectFade,
} from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore

interface propsType {
  children: React.ReactNode;
  animationStyle: string;
  paginationActive: Boolean;
}
const Slider: React.FC<propsType> = ({
  children,
  animationStyle = "cube",
  paginationActive,
}) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[
        Navigation,
        Pagination,
        A11y,
        EffectCube,
        Autoplay,
        EffectFlip,
        EffectCards,
        EffectCoverflow,
        EffectFade,
        ...(paginationActive ? [Pagination] : []),
      ]}
      effect={animationStyle || "fade"}
      spaceBetween={50}
      slidesPerView={1}
      // grabCursor={true}
      // navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {children}
    </Swiper>
  );
};
export default React.memo(Slider) || Slider;
