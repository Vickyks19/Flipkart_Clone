import React from "react";
import "./ProductDetailCard.css";

function ProductDetailCard({ Data }) {
  return (
    <div className="ProductDetailCard">
      <div className="ProductDetailCard_Img">
        <img src={Data.url} />
      </div>
      <div className="ProductDetailCard_Details">
        <p className="ProductDetailCard_name">{Data.product}</p>
        <div className="RatingandReviews">
          <div className="Stars">{Data.rating} ◈</div>
          <p className="Ratings">
            {Data.rating} Ratings & {Data.reviews} Reviews
          </p>
        </div>
        <ul className="ProductDetailCard_Productdetails">
          <li className="ProductDetailCard_detail">{Data.Description}</li>
          <li className="sortitem">{Data.Display}</li>
          <li className="sortitem">{Data.Camera}</li>
          <li className="sortitem">{Data.Processor}</li>
        </ul>
      </div>

      <div className="ProductDetailCard_PriceandDelivery">
        <div className="pricecontainer">
          <p className="ProductDetailCard_price">{Data.Sellingprice}</p>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            height={21}
            alt=""
          />
          <p className="Freedel">Free Delivery</p>
          <p className="Discount">
            Upto <b>17,500</b> off on Exchange No Cost EMI from 23,317/month
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;
