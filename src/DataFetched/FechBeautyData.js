import axios from "axios";

export function fetchData() {
  return axios.get("https://server-sepia-tau.vercel.app/SwissBeautyProducts");
}
