import React from "react";

function BeautyCard({ id, title, image }) {
  return (
    <div className="border border-red-950" key={id}>
      <img src={image} alt="" width={"200px"} style={{ margin: "auto" }} />
      <h1>{title}</h1>
    </div>
  );
}

export default BeautyCard;
