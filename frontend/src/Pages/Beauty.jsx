import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchBeautyDataLoading,
  fetchBeautyDataSuccess,
} from "../features/BeautyProductSlice";

import BeautyCard from "../Components/BeautyCard";
import Loader from "../Loader/Loader";
import SideBar from "../Components/SideBar";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";

function Beauty() {
  const [searchparam] = useSearchParams();

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
    <div className="flex gap-10 justify-between border  border-red-600 mt-20 p-4 ">
      <div className="">
        <SideBar />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-4 gap-4 mb-4 border w-4/5 p-4">
          {beautyProductsData?.map((ele) => (
            <BeautyCard {...ele} key={ele.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Beauty;
