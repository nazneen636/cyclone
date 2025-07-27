import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";

const Star: React.FC<{ rating?: number }> = ({ rating = 3.5 }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (rating >= index + 1) {
      return <IoIosStar key={index} className="text-yellow-500 text-base" />;
    } else if (rating >= index + 0.5) {
      return (
        <IoStarHalfOutline
          key={index}
          className="text-yellow-500 text-[20px]"
        />
      );
    } else {
      return <FaRegStar key={index} className="text-gray-500 text-[18px]" />;
    }
  });
  return <div className="flex items-center gap-x-1">{stars}</div>;
};

export default React.memo(Star);
