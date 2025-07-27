import React, { useState } from "react";
import Container from "../../commonComponent/Container";
import { assets } from "../../../helpers/AssetProvider";
import Slider from "../../commonComponent/Slider";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  type bannerTypes = {
    id: number;
    name: string;
    image: string;
  };
  const [bannerList] = useState<bannerTypes[]>([
    {
      id: 1,
      name: "bannerOne",
      image: assets.bannerLeft,
    },
    {
      id: 2,
      name: "bannerOne",
      image: assets.bannerRight_1,
    },

    {
      id: 3,
      name: "bannerOne",
      image: assets.bannerRight_2,
    },
  ]);
  return (
    <div>
      <Container>
        <div className="grid grid-cols-3 gap-x-6! ">
          <div className="col-span-2 h-full rounded overflow-hidden">
            <div className="w-full h-[520px]">
              <Slider animationStyle="" paginationActive={true}>
                {bannerList.map((item) => (
                  <SwiperSlide>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full h-full rounded"
                    />
                  </SwiperSlide>
                ))}
              </Slider>
            </div>
          </div>
          <div className="flex gap-y-6 flex-col h-full">
            <div className="h-1/2 bg-red-300 rounded">
              <img
                src={assets.bannerRight_1}
                alt={assets.bannerRight_1}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-1/2 bg-blue-300 rounded">
              <img
                src={assets.bannerRight_2}
                alt={assets.bannerRight_2}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Banner) || Banner;
