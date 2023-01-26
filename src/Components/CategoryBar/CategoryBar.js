import React from "react";
import "./CategoryBar.css";

function CategoryBar({ Imgsrc, CategoryName }) {
  return (
    <div className="CategoryBar">
      <div className="CategoryBar_Img">
        <img src={Imgsrc} alt="CategoryImg" />
      </div>
      <p className="CategoryBar_Name">{CategoryName}</p>
    </div>
  );
}

export default CategoryBar;
