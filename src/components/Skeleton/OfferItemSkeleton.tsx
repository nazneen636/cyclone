import React from "react";
import Container from "../commonComponent/Container";

const OfferItemSkeleton = () => {
  return (
    <div className="">
      <Container>
        <div className="grid grid-rows-3 gap-y-3">
          {[...Array(3)].map((_) => (
            <div className="grid grid-cols-4 gap-x-3 animate-pulse">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-x-1 border border-gray-100 px-2! py-2! items-center rounded-md"
                >
                  <div className="h-20 w-20 bg-gray-200 rounded col-span-1 px-2!" />
                  <div className="col-span-2 flex flex-col gap-y-2 pr-2!">
                    <div className="h-6 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/4" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default React.memo(OfferItemSkeleton) || OfferItemSkeleton;
