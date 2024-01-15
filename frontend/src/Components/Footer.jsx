import React from "react";

function Footer() {
  return (
    <div
      className="w-5/6 leading-loose m-auto border border-gray-600 grid grid-col-4 grid-flow-col gap-6 justify-evenly
    sm:grid-col-2 mt-10 py-6">
      <div className="w-auto">
        <p className="font-bold text-black">ONLINE SHOPPING</p>
        <div className=" text-justify m-auto w-28">
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Home & Living</p>
          <p>Beauty</p>
          <p>Gift Card</p>
          <p>VB Insider</p>
        </div>
      </div>

      <div className=" w-auto">
        <p className="font-bold text-black"> CUSTOMER POLICIES</p>
        <div className=" text-justify m-auto w-28">
          <p>Contanct Us</p>
          <p>FAQ</p>
          <p>T&C</p>
          <p>Terms Of Use </p>
          <p>Track Orders</p>
          <p>Shipping</p>
          <p>Cancellation</p>
          <p>Return</p>
          <p>Privacy Policy</p>
          <p>Grievance</p>
        </div>
      </div>
      <div className=" w-auto">
        <p className="font-bold text-black"> EXPRIENCE VB APP ON MOBILE</p>
        <div className=" w-28 flex px-0 mt-6">
          <img
            src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
            alt=""
          />
          <img
            src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
            alt=""
          />
        </div>
        <div className=" w-38  px-0  ">
          <p className="text-black mt-16"> Keep in touch</p>
          <div className="flex gap-3">
            <img
              src="https://cdn.pixabay.com/photo/2021/02/08/15/44/social-media-5995266_640.png"
              alt=""
              width={"160px"}
            />
          </div>
        </div>
      </div>

      <div className="w-auto">
        <p className="font-bold text-black"> USEFUL LINKS</p>
        <div className="text-justify m-auto w-28 px-4">
          <p>Blog</p>
          <p>Careers</p>
          <p>Site Map</p>
          <p>Corporate Information</p>
          <p>WhiteHat</p>
          <p>Cleartrip</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
