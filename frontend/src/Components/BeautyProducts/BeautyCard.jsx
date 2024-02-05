import React, { useState } from "react";
import { calculateDiscountPrice } from "../../calculatediscount.js";

function BeautyCard({
  id,
  title,
  discription,
  image,
  price,
  category,
  brand,
  discount,
}) {
  const [wislistIcon, setWishlistIcon] = useState(false);
  const discountedPrice = calculateDiscountPrice(price, discount);

  return (
    <div className="w-full max-w-sm bg-white text-black border border-gray-200 rounded-lg shadow-2xl">
      <img class="p-4 rounded-t-lg border" src={image} alt="product image" />

      <div class="px-5 pb-5">
        <a href="#">
          <p class="text-md font-semibold tracking-tight text-gray-900">
            {discription}
          </p>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            5.0
          </span>
        </div>

        <div className="flex items-center justify-between  text-gray-800">
          <span className="text-lg font-bold text-gray-800">
            Rs. {discountedPrice}
          </span>

          <div className=" flex gap-2 text-green-700">
            <s> Rs.{price}</s>
            <h3>Rs. {Math.abs(discountedPrice - price)} off</h3>
          </div>
        </div>

        <div className="flex gap-5 justify-evenly mt-5">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-md text-sm px-3 py-2 ">
            Add to Cart
          </button>

          <button
            className="border text-black flex gap-3  hover:outline-slate-900 font-medium rounded-md text-sm px-3 py-2 focus:outline-gray-800"
            onClick={() => setWishlistIcon((prevState) => !prevState)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              color={wislistIcon ? "red" : "none"}
              fill={wislistIcon ? "red" : "none"}
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default BeautyCard;
