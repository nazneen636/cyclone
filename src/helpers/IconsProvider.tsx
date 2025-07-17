import { AiOutlineHeart } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneVolume,
  FaPinterestP,
  FaReddit,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiHelpCircle, FiRefreshCcw, FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import {
  IoArrowForwardSharp,
  IoLocationOutline,
  IoSearch,
} from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineHeadphones } from "react-icons/md";
import React from "react";

type iconsType = {
  [key: string]: React.ReactNode;
};

export const icons: iconsType = {
  rightArrow: <IoArrowForwardSharp />,
  downArrow: <IoIosArrowDown />,
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
  phone: <FaPhoneVolume />,
};
