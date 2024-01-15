import React from "react";

function BeautyCard({ id, title, image, price, category, brand, discount }) {
  return (
    <div className="border border-red-950">
      <h1>id {id}</h1>
      {/* <img src={image} alt="" width={"200px"} style={{ margin: "auto" }} /> */}
      <h1 className="text-xl">{title}</h1>
      <p>{category}</p>
      <p>discount {discount}</p>
      <p>{brand}</p>
      <h3>price {price}</h3>
    </div>
  );
}

export default BeautyCard;
