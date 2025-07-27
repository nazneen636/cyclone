import React from "react";
import Container from "../../commonComponent/Container";
import { icons } from "../../../helpers/IconsProvider";
import { shopByCategory } from "../../../lib/lib";

// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import { Navigation } from "swiper/modules";

const ShopByCategory = () => {
  return (
    <div className="">
      <Container>
        <div className="grid justify-center">
          <h1 className="heading1 text-gray-900 mb-10!">Shop with Category</h1>
        </div>
        {/* slide */}
        <div className="py-7! relative">
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {" "}
            {shopByCategory.map((item) => (
              <SwiperSlide>
                <div className="flex items-center justify-center shadow p-6! border border-gray-200 rounded">
                  <div key={item.id} className="">
                    {" "}
                    <img src={item.image} alt={item.name} />
                    <h1 className="body-medium-500 text-gray-900 text-center">
                      {item.name}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* arrow */}
          <div className="">
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-10 h-10 rounded-full bg-primary-500 z-50 next">
              <span className="text-white text-xl flex items-center justify-center ml-[10px]!">
                {icons.sliderPrevArrow}
              </span>
            </div>
            <div className="absolute -translate-y-1/2 -right-4 top-1/2 w-10 h-10 rounded-full bg-primary-500 z-50 prev">
              <span className="text-white text-xl flex items-center justify-center ml-[10px]!">
                {icons.sliderNextArrow}
              </span>
            </div>
          </div>
          {/* arrow */}
        </div>
      </Container>
    </div>
  );
};

export default React.memo(ShopByCategory) || ShopByCategory;
