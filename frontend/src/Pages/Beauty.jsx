import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchBeautyDataLoading,
  fetchBeautyDataSuccess,
} from "../features/BeautyProductSlice";

import BeautyCard from "../Components/BeautyProducts/BeautyCard";
import Loader from "../Loader/Loader";
import SideBar from "../Components/BeautyProducts/SideBar";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import FilterBar from "../Components/FilterBar";

function Beauty() {
  const [searchparam] = useSearchParams();
  // console.log(searchparam.get("_sort"));

  const location = useLocation();
  // console.log(location);
  const dispatch = useDispatch();

  const storeData = useSelector((data) => {
    return data.BeautyProductReducer;
  });
  // console.log(storeData);

  const { beautyProductsData, loading, error } = storeData;

  useEffect(() => {
    dispatch(fetchBeautyDataLoading());
    const feched = async () => {
      try {
        axios
          .get(`https://server-sepia-tau.vercel.app/SwissBeautyProducts`, {
            params: {
              category: searchparam.getAll("category"),
              discount_gte: searchparam.get("discount"),

              _sort: searchparam.get("_sort"),
              _order: searchparam.get("_order"),
            },
          })
          .then((response) => {
            dispatch(fetchBeautyDataSuccess(response.data));
          });
      } catch (err) {
        dispatch(fetchBeautyDataFailure(error));
      }
    };
    feched();
  }, [location.search]);

  return (
    <>
      <div className=" flex border border-black w-full">
        <FilterBar />
      </div>
      <div className="flex gap-10 border  border-red-600  p-4 ">
        <div className="">
          <SideBar />
        </div>

        {loading ? (
          <div className="flex ml-96 w-28 m-auto">
            <Loader />
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 gap-4 mb-4 border  border-pink-900 h-3/5  w-4/5 p-4 sm:grid-cols-2  md:grid-cols-2">
            {beautyProductsData?.map((ele) => (
              <BeautyCard {...ele} key={ele.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Beauty;
