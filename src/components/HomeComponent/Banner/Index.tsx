import React, { useState } from "react";
import Container from "../../commonComponent/Container";
import { assets } from "../../../helpers/AssetProvider";
import Slider from "../../commonComponent/Slider";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router";

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
      name: "bannerTwo",
      image: assets.bannerRight_2,
    },

    {
      id: 3,
      name: "bannerThree",
      image: assets.arrival_banner_left,
    },
  ]);
  return (
    <div>
      <Container>
        <div className="grid grid-cols-3 gap-6! ">
          <div className="col-span-2 h-full rounded overflow-hidden bg-red-400">
            <div className="w-full h-[520px]">
              <Slider animationStyle="" paginationActive={true}>
                {bannerList.map((item) => (
                  <SwiperSlide>
                    <Link to="/shop">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-[520px] rounded"
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Slider>
            </div>
          </div>
          <div className="flex gap-y-6 flex-col h-full">
            <div className="h-1/2 rounded bg-red-500">
              <Link to="/shop" className="h-full">
                <img
                  src={assets.bannerRight_1}
                  alt={assets.bannerRight_1}
                  className="w-full h-full "
                />
              </Link>
            </div>
            <div className="h-1/2 rounded bg-red-300">
              <Link to="/shop" className="h-full">
                <img
                  src={assets.bannerRight_2}
                  alt={assets.bannerRight_2}
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Banner) || Banner;
