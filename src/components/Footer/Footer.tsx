import React from "react";
import Container from "../commonComponent/Container";
import { assets } from "../../helpers/AssetProvider";
import { icons } from "../../helpers/IconsProvider";
import { useCategory } from "../../hooks/UseCategory";
import { motion } from "motion/react";
// import { useCategoryData } from "../../hooks/UseCategory";

interface FooterLink {
  title: string;
  id: number;
  slug: string;
}

const Footer = () => {
  //   const { data } = useCategoryData();

  const links: FooterLink[] = [
    { title: "Shop Product", id: 1, slug: "shop-product" },
    { title: "Shopping Cart", id: 2, slug: "shopping-cart" },
    { title: "Wishlist", id: 3, slug: "wishlist" },
    { title: "Compare", id: 4, slug: "compare" },
    { title: "Track Order", id: 5, slug: "track-order" },
    { title: "Customer Help", id: 6, slug: "customer-help" },
    { title: "About Us", id: 7, slug: "about-us" },
  ];

  const tags: { tag: string }[] = [
    { tag: "Game" },
    { tag: "iPhone" },
    { tag: "TV" },
    { tag: "Asus Laptops" },
    { tag: "Macbook" },
    { tag: "SSD" },
    { tag: "Graphics Card" },
    { tag: "Power Bank" },
    { tag: "Smart TV" },
    { tag: "Speaker" },
    { tag: "Tablet" },
    { tag: "Microwave" },
    { tag: "Samsung" },
  ];
  const { data } = useCategory();

  return (
    <div className="">
      <div className="bg-gray-900 py-10!">
        <Container>
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-x-3.5 py-16!">
            {/* Logo & Contact Info */}
            <div>
              <img src={assets.footerLogo} alt="Footer Logo" />
              <div className="py-5!">
                <span className="body-medium-400 text-gray-500 mb-2! block!">
                  Customer Supports:
                </span>
                <a
                  className="body-large-400 text-gray-00 block mb-2!"
                  href="tel:(629) 555-0129"
                >
                  (629) 555-0129
                </a>
                <address className="body-large-400 text-gray-300 not-italic mb-2!">
                  4517 Washington Ave. <br /> Manchester, Kentucky 39495
                </address>
                <a
                  href="mailto:info@kinbo.com"
                  className="body-medium-500 text-gray-00"
                >
                  info@kinbo.com
                </a>
              </div>
            </div>

            {/* Top Category */}
            <div>
              <h1 className="label1 text-gray-00">Top Category</h1>
              <ul className="flex flex-col gap-y-2 mt-[18px]!">
                {data?.slice(0, 6)?.map((item, index) => (
                  <motion.li
                    whileHover={{ x: 20 }}
                    key={index}
                    className="body-large-400 text-gray-400 capitalize cursor-pointer hover:text-gray-00 transition-all"
                  >
                    {item}
                  </motion.li>
                ))}
                <motion.li
                  whileHover={{ x: 20 }}
                  className="body-large-400 text-gray-300 cursor-pointer"
                >
                  Browse All product →
                </motion.li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h1 className="label1 text-gray-00">Quick Links</h1>
              <ul className="flex flex-col gap-y-2 mt-[18px]!">
                {links.map((item) => (
                  <motion.li
                    whileHover={{ x: 20 }}
                    key={item.id}
                    className="body-large-400 text-gray-400 capitalize cursor-pointer hover:text-gray-00 transition-all"
                  >
                    {item.title}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Download App */}
            <div>
              <h1 className="label1 text-gray-00">Download APP</h1>
              <div className="grid grid-rows-2 gap-y-8 mt-6!">
                <div className="flex gap-x-3 items-center text-gray-00 bg-gray-800 py-2! w-[180px] px-4! cursor-pointer rounded">
                  <span className="text-4xl">{icons.playStore}</span>
                  <div className="cursor-pointer ">
                    <span>Get it now</span>
                    <h2 className="">Google Play</h2>
                  </div>
                </div>
                <div className="flex gap-x-3 items-center text-gray-00 bg-gray-800 py-2! w-[180px]  px-4! cursor-pointer rounded">
                  <span className="text-4xl">{icons.apple}</span>
                  <div className="cursor-pointer">
                    <span>Get it now</span>
                    <h2 className="">App Store</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h1 className="label1 text-gray-00">Tags</h1>
              <div className="flex flex-wrap gap-x-1.5 gap-y-4 mt-6!">
                {tags.map((item, index) => (
                  <div
                    key={index}
                    className="body-medium-400 px-3! py-2! border-2 border-gray-800 text-gray-400 cursor-pointer hover:text-gray-00 transition-all hover:bg-gray-700 rounded hover:border-gray-00"
                  >
                    {item.tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 py-5! border-t border-t-gray-500 flex items-center justify-center">
        <p className="body-medium-400 text-gray-400 text-center">
          Kinbo - eCommerce Template © 2025. Design by Templatecookie modified
          by mern2403/mern2404
        </p>
      </div>
    </div>
  );
};

export default React.memo(Footer);
