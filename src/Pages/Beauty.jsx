import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchBeautyDataLoading,
  fetchBeautyDataSuccess,
} from "../features/BeautyProductSlice";
import { fetchData } from "../DataFetched/FechBeautyData";
import BeautyCard from "../Components/BeautyCard";
import Loader from "../Loader/Loader";
import SideBar from "../Components/SideBar";

function Beauty() {
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
        fetchData().then((response) => {
          dispatch(fetchBeautyDataSuccess(response.data));
        });
      } catch (error) {
        dispatch(fetchBeautyDataFailure(err));
      }
    };
    feched();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="flex gap-10 justify-between border  border-red-600 mt-20 p-4 ">
      <div className="">
        <SideBar />
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4 border w-4/5 p-4">
        {beautyProductsData?.map((ele) => (
          <BeautyCard {...ele} key={ele.id} />
        ))}
      </div>
    </div>
  );
}

export default Beauty;
