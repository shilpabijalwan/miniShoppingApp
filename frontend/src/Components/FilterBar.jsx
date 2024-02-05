import React, { useEffect, useState } from "react";
import SvgDown, { SvgUp } from "../assets/svg";
import { useSearchParams } from "react-router-dom";
import { calculateDiscountPrice } from "../calculatediscount";

function FilterBar() {
  const [btn, setbtn] = useState(false);
  const [searchparams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState("");
  const discountPrice = calculateDiscountPrice();
  //   console.log(btn);
  console.log(order);
  useEffect(() => {
    let params = {
      _sort: "price",
      _order: order,
    };
    setSearchParams(params);
  }, [order]);
  return (
    <div className="mt-24 flex justify-between w-full px-10">
      <p className="font-bold mt-2">FILTERS</p>

      <div class="relative inline-block text-left">
        <button
          onClick={() => setbtn((prevState) => !prevState)}
          type="button"
          className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-300">
          Country of Origin
          {btn ? <SvgUp /> : <SvgDown />}
        </button>

        {btn ? (
          <div class="flex absolute z-10 w-60 mt-2 bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg">
            <div class="px-4 py-2">
              <input type="checkbox" id="option1" name="option1" class="mr-2" />
              <label for="option1">All countries</label>
            </div>
            <div class="px-4 py-2">
              <input type="checkbox" id="option2" name="option2" class="mr-2" />
              <label for="option2">India</label>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="border flex rounded gap-2 px-2">
        <p className="mt-1">Sort by : </p>
        <select
          onChange={(e) => setOrder(e.target.value)}
          name=""
          id=""
          className="focus:outline-none focus:border-transparent font-bold text-gray-800">
          <option value="Recommended">Recommended</option>
          <option value="What's New"> What's New</option>
          <option value="Popularity">Popularity</option>
          <option value="Better Discount"> Better Discount</option>
          <option value="desc">Price: High to Low</option>
          <option value="asc">Price: Low to High</option>
          <option value="Customer Rating"> Customer Rating</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
