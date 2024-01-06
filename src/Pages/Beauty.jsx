import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchBeautyDataLoading,
  fetchBeautyDataSuccess,
} from "../features/BeautyProductSlice";
import { fetchData } from "../DataFetched/FechBeautyData";
import BeautyCard from "../Components/BeautyCard";
import Loader from "../Loader/Loader";
function Beauty() {
  const dispatch = useDispatch();
  const storeData = useSelector((data) => {
    return data.BeautyProductReducer;
  });
  // console.log(storeData);
  const { beautyProductsData, loading, error } = storeData;

  useEffect(() => {
    dispatch(fetchBeautyDataLoading());
    fetchData()
      .then((response) => {
        dispatch(fetchBeautyDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchBeautyDataFailure(error));
      });
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="grid grid-cols-4 gap-7 w-5/6 m-auto border">
      {beautyProductsData?.map((ele) => (
        <BeautyCard {...ele} />
      ))}
    </div>
  );
}

export default Beauty;
