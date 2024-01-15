import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import MenData from "../../Pages/MenData";
import WomenData from "../../Pages/WomenData";
import LayOut from "../Layout/LayOut";
import KidsData from "../../Pages/KidsData";
import HomeAndLiving from "../../Pages/HomeAndLiving";
import Beauty from "../../Pages/Beauty";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOut />}>
      <Route path="" element={<HomePage />} />
      <Route path="men" element={<MenData />} />
      <Route path="women" element={<WomenData />} />
      <Route path="kids" element={<KidsData />} />
      <Route path="home" element={<HomeAndLiving />} />
      <Route path="beauty" element={<Beauty />} />

      {/* <Route path="user" element={<User />} loader={UserInfo} /> */}
    </Route>
  )
);
