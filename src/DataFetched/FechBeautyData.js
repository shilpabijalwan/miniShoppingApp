import axios from "axios";
import { useSearchParams } from "react-router-dom";

export const fetchData = (obj) => {
  return axios.get("https://server-sepia-tau.vercel.app/SwissBeautyProducts", {
    obj,
  });
};
