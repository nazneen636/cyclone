import React, { useState } from "react";
import { icons } from "../../../helpers/IconsProvider";
import Container from "../../commonComponent/Container";

const Features: React.FC = () => {
  type Feature = {
    id: number;
    name: string;
    description: string;
    icons: React.ReactNode;
  };
  const [feature] = useState<Feature[]>([
    {
      id: 1,
      name: "Fasted Delivery",
      description: "Delivery in 24/H",
      icons: icons.package,
    },
    {
      id: 2,
      name: "24 Hours Return",
      description: "100% money-back guarantee",
      icons: icons.trophy,
    },
    {
      id: 3,
      name: "Secure Payment",
      description: "Your money is safe",
      icons: icons.creditCard,
    },
    {
      id: 4,
      name: "Support 24/7",
      description: "Live contact/message",
      icons: icons.support,
    },
  ]);
  return (
    <div className="my-10!">
      <Container>
        <div className="border border-gray-100 px-10! py-7! rounded grid grid-cols-4  gap-x-5 ">
          {feature?.map((item) => (
            <div
              className={
                feature.length == item.id
                  ? "flex items-center gap-x-3 "
                  : " flex items-center gap-x-3 border-r-1 border-r-gray-100"
              }
              key={item.id}
            >
              <div className="text-gray-800 text-4xl font-light">
                {" "}
                {item.icons}
              </div>
              <div>
                <h1 className="label3 text-gray-900 "> {item.name}</h1>
                <p className="body-small-400 text-gray-500 mt-2 ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Features;
