import React, { useState } from "react";
import Breadcrumb from "../components/commonComponent/Breadcrumb";
import Container from "../components/commonComponent/Container";
import { useGetAllProduct } from "../hooks/UseQuery";
import ProductCard from "../components/commonComponent/ProductCard";
import { useCategory, useSingleCategory } from "../hooks/UseCategory";
import RangeSlider from "react-range-slider-input";
import type { productDataType } from "../types/productApiData";
import { assets } from "../helpers/AssetProvider";
import { icons } from "../helpers/IconsProvider";
import Button from "../components/commonComponent/Button";
import Search from "../components/commonComponent/Search";

type priceRangeType = {
  id: number;
  range: string;
};

const priceRangeObj: priceRangeType[] = [
  {
    id: 1,
    range: "All Price",
  },
  {
    id: 2,
    range: "Under $20",
  },
  {
    id: 3,
    range: "$25 to $100",
  },
  {
    id: 4,
    range: "$100 to $300",
  },
  {
    id: 5,
    range: "$300 to $500",
  },
  {
    id: 6,
    range: "$500 to $1,000",
  },
  {
    id: 7,
    range: "$1,000 to $10,000",
  },
];

const Shop = () => {
  const [randomColor] = useState<string[]>([
    "primary-500",
    "success-500",
    "secondary-500",
    "warning-500",
    "danger-500",
  ]);

  const [value, setValue] = useState<[number, number]>([30, 60]);

  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);
  const { data, isPending, isError, refetch, error } = useGetAllProduct();
  const { data: allProduct } = useGetAllProduct();

  const { data: categoryData } = useCategory();

  // handle category
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { data: CategoryProduct, isPending: categoryPending } =
    useSingleCategory(selectedCategory);

  const handleCategory = (categoryItem: string) => {
    setSelectedCategory(categoryItem);
  };

  // pagination
  const [page, setPage] = useState<number>(1);
  const [pagePerShow] = useState<number>(16);

  const totalPage =
    selectedCategory === "all"
      ? Math.ceil((data?.products?.length || 0) / pagePerShow)
      : Math.ceil((CategoryProduct?.products?.length || 0) / pagePerShow);

  //   pagination funtionality
  const handlePerItem = (index: number) => {
    if (index > 0 && index <= Math.ceil(totalPage)) {
      setPage(index);
    }
  };
  // pagination
  return (
    <div>
      <Breadcrumb />
      <Container>
        <div className="grid grid-cols-4 gap-x-4 pt-6!">
          {/* left side */}
          <div className="">
            {/* category */}
            <div className="border-b-gray-100 border-b! pb-5!">
              <h1 className="label2 text-gray-900 capitalize mb-2!">
                category
              </h1>
              <div className="h-[40vh] overflow-y-scroll category">
                <ul className="flex flex-col gap-y-2">
                  {categoryData?.map((item: string, index: number) => (
                    <li
                      onClick={() => handleCategory(item)}
                      key={index}
                      className="flex gap-3 items-center"
                    >
                      <input
                        type="radio"
                        id={item}
                        name="category"
                        className="relative cursor-pointer appearance-none after:absolute after:w-3 after:h-3 after:rounded-full after:bg-gray-00 checked:after:border-4 checked:after:border-primary-500 after:border after:border-gray-200 after:left-2 after:top-1/2 after:-translate-1/2"
                      />
                      <label
                        htmlFor={item}
                        className="ml-2! text-gray-700 body-small-400 hover:text-gray-900 cursor-pointer capitalize"
                      >
                        {" "}
                        <span>{item}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price Range */}
            <div className="border-b-gray-100 border-b! pb-5! mt-5!">
              <h1 className="label2 text-gray-900 capitalize mb-2!">
                Price Range
              </h1>
              <div className="">
                <RangeSlider
                  id="range-slider-yellow"
                  value={value}
                  onInput={setValue}
                />
                <div className="mt-5! flex justify-between items-center gap-x-4">
                  <button className="cursor-pointer label3 text-gray-500 border-2 hover:bg-primary-50 hover:border-primary-400 transition-all border-gray-100 grow py-2! rounded">
                    Min price
                  </button>
                  <button className="label3 text-gray-500 border-2 hover:bg-primary-50 hover:border-primary-400 transition-all border-gray-100 grow py-2! rounded cursor-pointer">
                    Max price
                  </button>
                </div>

                <ul className="flex flex-col gap-y-2 mt-4!">
                  {priceRangeObj?.map((item) => (
                    <li key={item.id} className="flex gap-3 items-center">
                      <input
                        type="radio"
                        id={item.range}
                        name="category"
                        className="relative cursor-pointer appearance-none after:absolute after:w-3 after:h-3 after:rounded-full after:bg-gray-00 checked:after:border-2 checked:after:border-primary-500 after:border after:border-gray-200 after:left-2 after:top-1/2 after:-translate-1/2"
                      />
                      <label
                        htmlFor={item.range}
                        className="ml-2! text-gray-700 body-small-400 hover:text-gray-900 cursor-pointer capitalize"
                      >
                        {" "}
                        <span>{item.range}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* popular Brands*/}
            <div className="border-b-gray-100 border-b! pb-5! mt-5!">
              <h1 className="label2 text-gray-900 capitalize mb-2!">
                popular Brands
              </h1>
              <div className="">
                <ul className="grid grid-cols-2 gap-y-2 mt-4!">
                  {allProduct?.products
                    ?.slice(0, 13)
                    .map((item: productDataType) => (
                      <li key={item.id} className="flex gap-3 items-center">
                        <input
                          type="checkbox"
                          id={item.brand}
                          name="category"
                          className="relative cursor-pointer appearance-none after:absolute after:rounded-[2px] after:w-4 after:h-4 after:bg-gray-00 checked:after:border-0 checked:after:bg-primary-500 checked:after:content-['✓'] checked:after:text-gray-00 checked:after:text-sm after:border after:border-gray-200 after:left-2 after:top-1/2 after:-translate-1/2 after:flex after:items-center after:justify-center"
                        />
                        <label
                          htmlFor={item?.brand}
                          className="ml-2! text-gray-700 body-small-400 hover:text-gray-900 cursor-pointer capitalize"
                        >
                          {" "}
                          <span>{item.brand.split(" ")[0]}</span>
                        </label>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Popular Tag */}
            <div className="pb-5! mt-5!">
              <h1 className="label2 text-gray-900 capitalize mb-2!">
                Popular Tag
              </h1>
              <div className="">
                <ul className="flex gap-2 flex-wrap">
                  {allProduct?.products?.slice(1, 20)?.map((item) => (
                    <li
                      key={item.id}
                      className={`body-medium-400 px-3! py-[6px]! border border-gray-100 text-gray-900 cursor-pointer hover:text-primary-500 transition-all hover:bg-primary-50 hover:border-primary-500 rounded-[2px] bg-${
                        randomColor[
                          Math.floor(Math.random() * randomColor.length)
                        ]
                      }`}
                    >
                      {item.title.split(" ")[0]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* single product overview */}
            <div className="border-4 pb-6!  border-primary-100 mt-5! rounded">
              <div className=" flex  flex-col items-center  gap-y-7 px-4! w-full justify-center">
                <img
                  src={assets.SingleProduct_1}
                  alt=""
                  className="w-[180px] h-[180px]"
                />
                <img
                  src={assets.SingleProduct_2}
                  alt=""
                  className="w-[248px]"
                />
                <div className="flex flex-col gap-y-3 items-stretch w-full">
                  <Button className="heading7 bg-primary-500 w-full text-gray-00 py-2! flex items-center justify-center gap-x-2 hover:bg-primary-600 transition-all cursor-pointer">
                    <span>{icons.cart}</span>
                    <span> Add to Cart</span>
                  </Button>

                  <Button className="heading7 border-2 border-primary-500 w-full text-primary-500 py-2! flex items-center justify-center gap-x-2  cursor-pointer">
                    <span> View Details</span>
                    <span className="mt-[2px]!">{icons.sliderNextArrow}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="col-span-3 flex flex-col gap-4">
            <div className="grid grid-cols-2">
              {/* search  */}
              <div className="">
                <Search className="relative border border-gray-100">
                  <input
                    name="search"
                    type={"search"}
                    placeholder="Search for anything..."
                    className="bg-gray-00 body-small-400 w-full py-3! rounded text-gray-500 px-4! placeholder:body-small-400 pr-12! outline-none"
                  />

                  <span className="text-gray-900 text-2xl absolute top-3 right-4">
                    {icons.search}
                  </span>
                </Search>
              </div>
              {/* search  */}

              {/* sort */}
              <div className="flex items-center justify-end gap-5">
                <h2 className="body-medium-400 text-gray-900">Sort by :</h2>
                <div
                  onClick={() => setCategoryOpen(!categoryOpen)}
                  className="relative"
                >
                  <select
                    name="category"
                    id="category"
                    className="border border-gray-100 body-small-400 px-20! !py-3 appearance-none rounded outline-none cursor-pointer"
                  >
                    <option
                      className="bg-gray-50 body-small-400"
                      value="Mobile"
                    >
                      Most Popular
                    </option>
                    <option
                      value="Laptop"
                      className="bg-gray-50 body-small-400"
                    >
                      Laptop
                    </option>
                    <option
                      value="Tablet"
                      className="bg-gray-50 body-small-400"
                    >
                      Tablet
                    </option>
                    <option value="Camera">Camera</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                  <span className="absolute top-1/2 -translate-1/2 left-[7.5%]">
                    {categoryOpen ? icons.upArrow : icons.downArrow}
                  </span>
                </div>
              </div>
              {/* sort */}
            </div>
            <div className="bg-gray-50 grid grid-cols-2 rounded py-3! px-6!">
              <div className="flex items-center gap-x-4">
                <h2 className="body-medium-400 text-gray-600">
                  Active Filters:
                </h2>
                <div className="flex items-center gap-x-1">
                  <span className="body-medium-400 text-gray-900 ">
                    Electronics Devices
                  </span>
                  <span className="text-gray-600 text-sm cursor-pointer">
                    {icons.cross}
                  </span>
                </div>
                <div className="flex items-center gap-x-1">
                  <span className="body-medium-400 text-gray-900">
                    5 Star Rating
                  </span>
                  <span className="text-gray-600 text-sm cursor-pointer">
                    {icons.cross}
                  </span>
                </div>
              </div>
              <div className="">
                <h1 className="body-medium-400 text-gray-600 float-right">
                  <span className="text-gray-900">65,867</span> Results found.
                </h1>
              </div>
            </div>
            <div className="">
              <ProductCard
                status={{
                  fullDataLoaded: true,
                  data:
                    selectedCategory == "all"
                      ? data?.products?.slice(
                          page * 16 - 16,
                          page * pagePerShow
                        )
                      : CategoryProduct?.products?.slice(
                          page * 16 - 16,
                          page * pagePerShow
                        ),
                  isPending: categoryPending ? categoryPending : isPending,
                  isError,
                  error,
                  refetch: () => refetch(),
                }}
              />
            </div>

            {/* pagination */}
            <div className="my-4!">
              <div className="flex gap-x-6 items-center justify-center mb-2!">
                <div
                  onClick={() => handlePerItem(page - 1)}
                  className="flex items-center justify-center w-10 h-10 rounded-full  hover:bg-gray-900  cursor-pointer bg-primary-500 text-gray-00 hover:text-gray-00"
                >
                  <span>{icons.sliderPrevArrow}</span>
                </div>
                <ul className="flex gap-x-2">
                  {[...Array(totalPage).keys()].map((item) => (
                    <li
                      key={item}
                      onClick={() => handlePerItem(item + 1)}
                      className={
                        item + 1 == page
                          ? "w-10 h-10 rounded-full  hover:bg-gray-900  cursor-pointer bg-primary-500 text-gray-00 hover:text-gray-00 flex items-center justify-center"
                          : "w-10 h-10 rounded-full  hover:bg-primary-600 border-2 border-gray-100 cursor-pointer hover:text-gray-00 flex items-center justify-center"
                      }
                    >
                      {item + 1}
                    </li>
                  ))}
                </ul>
                <div
                  onClick={() => handlePerItem(page + 1)}
                  className="w-10 h-10 rounded-full  hover:bg-gray-900  cursor-pointer bg-primary-500 text-gray-00 hover:text-gray-00 flex items-center justify-center"
                >
                  <span>{icons.sliderNextArrow}</span>
                </div>
              </div>
            </div>
            {/* pagination */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Shop) || Shop;
