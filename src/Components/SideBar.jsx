import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchBeautyDataLoading,
  fetchBeautyDataSuccess,
} from "../features/BeautyProductSlice";

function SideBar() {
  const [discount, setDiscount] = useState("");
  // console.log(discount);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://server-sepia-tau.vercel.app/SwissBeautyProducts?discount_gte=${discount}`
      )
      .then((response) => {
        dispatch(fetchBeautyDataSuccess(response.data));
      });
  }, [discount]);

  return (
    <>
      <aside
        id="default-sidebar"
        className="sticky top-16 left-0 text-white w-64 h-screen transition-transform -translate-x-full sm:translate-x-0  "
        aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-8 font-medium">
            {/* for radio button */}
            <ul className="space-y-1 border border-gray-700 px-3">
              <li className="flex gap-3">
                <input type="radio" name="option" id="" className="w-4" />
                <label htmlFor="">Men</label>
              </li>

              <li className=" flex gap-3 ">
                <input type="radio" name="option" id="" className="w-4" />
                <label htmlFor="">Women</label>
              </li>

              <li className=" flex gap-3 ">
                <input type="radio" name="option" id="" className="w-4" />
                <label htmlFor="">Boys</label>
              </li>
              <li className=" flex gap-3 ">
                <input type="radio" name="option" id="" className="w-4" />
                <label htmlFor="">Girls</label>
              </li>
            </ul>
            {/* for category */}
            <ul className="space-y-1 border border-gray-700 px-3">
              <li>CATEGORIES</li>

              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">EyeMakeup</label>
              </li>

              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">Lipstick</label>
              </li>
              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">Face Wash and Cleanser</label>
              </li>
              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">Serum and Gel</label>
              </li>
              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">Shampoo</label>
              </li>
            </ul>

            <ul className="space-y-1 border border-gray-700 px-3">
              <li>BRAND</li>
              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">Biotique</label>
              </li>
              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">Colorbar</label>
              </li>
              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">Swiss Beauty</label>
              </li>
              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">Dove</label>
              </li>
              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">Lakme</label>
              </li>
              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">Wild stone</label>
              </li>
              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">Plum</label>
              </li>
              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">Dot & Key</label>
              </li>
            </ul>
            <ul className="space-y-1 border border-gray-700 px-3">
              <li>Price</li>
              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">Rs. 20 to Rs. 499</label>
              </li>
              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">Rs. 499 to Rs. 699</label>
              </li>
              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">Rs. 699 to Rs. 899</label>
              </li>
              <li className=" flex gap-3 ">
                <input type="checkbox" name="" id="" className="w-4" />
                <label htmlFor="">Rs. 899 to Rs. 1699</label>
              </li>
            </ul>
            <ul className="space-y-1 border border-gray-700 px-3">
              <li>DISCOUNT RANGE</li>
              <li className=" flex gap-3 ">
                <input
                  type="radio"
                  name="discountRange"
                  id=""
                  className="w-4"
                  value={10}
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <label htmlFor="">10% and above</label>
              </li>
              <li className=" flex gap-3 ">
                <input
                  type="radio"
                  name="discountRange"
                  id=""
                  className="w-4"
                  value={20}
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <label htmlFor="">20% and above</label>
              </li>
              <li className=" flex gap-3 ">
                <input
                  type="radio"
                  name="discountRange"
                  id=""
                  className="w-4"
                  value={30}
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <label htmlFor="">30% and above</label>
              </li>
              <li className=" flex gap-3 ">
                <input
                  type="radio"
                  name="discountRange"
                  id=""
                  className="w-4"
                  value={40}
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <label htmlFor="">40% and above</label>
              </li>
              <li className=" flex gap-3 ">
                <input
                  type="radio"
                  name="discountRange"
                  id=""
                  className="w-4"
                  value={50}
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <label htmlFor="">50% and above</label>
              </li>
              <li className=" flex gap-3 ">
                <input
                  type="radio"
                  name="discountRange"
                  id=""
                  className="w-4"
                  value={60}
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <label htmlFor="">60% and above</label>
              </li>
              <li className=" flex gap-3 ">
                <input
                  type="radio"
                  name="discountRange"
                  id=""
                  className="w-4"
                  value={70}
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <label htmlFor="">70% and above</label>
              </li>
              <li className=" flex gap-3 ">
                <input
                  type="radio"
                  name="discountRange"
                  id=""
                  className="w-4"
                  value={80}
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <label htmlFor="">80% and above</label>
              </li>
            </ul>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
