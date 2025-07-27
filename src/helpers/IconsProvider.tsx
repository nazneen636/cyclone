import { AiOutlineHeart } from "react-icons/ai";
import {
  FaEye,
  FaFacebook,
  FaInstagram,
  FaPhoneVolume,
  FaPinterestP,
  FaReddit,
  FaStar,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiHelpCircle, FiRefreshCcw, FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  IoArrowForwardSharp,
  IoLocationOutline,
  IoSearch,
} from "react-icons/io5";
import { LuPackage, LuUserRound } from "react-icons/lu";
import { MdOutlineHeadphones, MdPhoneBluetoothSpeaker } from "react-icons/md";
import React from "react";
import { CgCreditCard } from "react-icons/cg";
import { GoTrophy } from "react-icons/go";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

type iconsType = {
  [key: string]: React.ReactNode;
};

export const icons: iconsType = {
  rightArrow: <IoArrowForwardSharp />,
  downArrow: <IoIosArrowDown />,
  upArrow: <IoIosArrowUp />,
  twitter: <FaTwitter />,
  facebook: <FaFacebook />,
  pinterest: <FaPinterestP />,
  instagram: <FaInstagram />,
  youtube: <FaYoutube />,
  reddit: <FaReddit />,
  cart: <FiShoppingCart />,
  heart: <AiOutlineHeart />,
  user: <LuUserRound />,
  search: <IoSearch />,
  location: <IoLocationOutline />,
  support: <MdOutlineHeadphones />,
  compare: <FiRefreshCcw />,
  help: <FiHelpCircle />,
  phone: <MdPhoneBluetoothSpeaker />,
  creditCard: <CgCreditCard />,
  trophy: <GoTrophy />,
  package: <LuPackage />,
  sliderPrevArrow: <FaArrowLeftLong />,
  sliderNextArrow: <FaArrowRightLong />,
  star: <FaStar />,
  eye: <FaEye />,
};
