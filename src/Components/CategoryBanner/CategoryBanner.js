import React from "react";
import "./CategoryBanner.css";

function CategoryBanner({ ImgSrc, Title, Brand }) {
  return (
    <div className="CategoryBanner">
      <img src={ImgSrc} alt="" className="CategoryBanner_img" />
      <p className="CategoryBanner_title">
        {Title.length < 25 ? Title : Title.slice(0, 15) + "..."}
      </p>
      <p className="CategoryBanner_ShopNow">Shop Now!</p>
      <p className="CategoryBanner_Brands">{Brand}</p>
    </div>
  );
}

export default CategoryBanner;
