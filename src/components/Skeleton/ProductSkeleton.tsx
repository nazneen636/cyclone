import React from "react";

const ProductSkeleton: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {[...new Array(8)].map((_) => (
          <div className="animate-pulse w-[300px] p-5.5! border border-gray-100 rounded relative shadow">
            {/* Image Placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-[249px]! h-[172px] bg-gray-200 rounded"></div>
            </div>

            {/* Product Details */}
            <div className="pt-4! space-y-2">
              {/* Rating */}
              <div className="flex items-center gap-x-2 mb-3!">
                <div className="flex gap-x-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-4  h-4 bg-gray-300 rounded"></div>
                  ))}
                </div>
                <div className="w-10 h-4 bg-gray-300 rounded"></div>
              </div>

              {/* Title */}
              <div className="w-3/4 h-4 mb-1! bg-gray-300 rounded"></div>
              {/* Description */}
              <div className="w-full h-4 mb-1! bg-gray-300 rounded"></div>

              {/* Price */}
              <div className="flex gap-x-2 mb-1!">
                <div className="w-16 h-4 bg-gray-300 rounded"></div>
                <div className="w-20 h-4 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* Badge */}
            {/* <div className="absolute top-2 shadow-2xl left-2 w-20 h-5 bg-gray-300 rounded"></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSkeleton;
