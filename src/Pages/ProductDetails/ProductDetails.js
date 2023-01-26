import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../../ProductData";
import "./ProductDetails.css";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillThunderbolt, AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addCart } from "../../slices/cartSlice";

function ProductDetails() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const product = ProductsData.find((item) => {
      return item.id.toString() === id;
    });
    setData(product);
  }, [id]);

  const addToCart = () => {
    dispatch(addCart(data));
  };

  return (
    <div className="ProductDetails">
      <div className="ProductDetails_left">
        <div className="otherImg">
          <img src={data.url} alt="" className="proimg" />
          <img src={data.url} alt="" className="proimg" />
          <img src={data.url} alt="" className="proimg" />
        </div>

        <div className="ProductDetails_img">
          <img src={data.url} alt="" />
          <div className="ProductDetails_btns">
            <button className="ProductDetails_btn" onClick={addToCart}>
              <FaShoppingCart /> Add to cart
            </button>
            <button className="ProductDetails_btn">
              <AiFillThunderbolt /> Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="ProductDetails_right">
        <p className="ProductName">{data.product}</p>
        <div className="ratingsandreviews">
          <div className="stars">
            {data.rating} <AiFillStar />
          </div>
          <div className="ratings">
            {data.rating} Ratings & {data.reviews} Reviews
          </div>
          <img src="" alt="" />
        </div>
        <p className="price">₹{data.Sellingprice}</p>
        <p className="packfee">+ ₹69 Secured Packing Fee </p>
        <p className="availableoff">Available offers</p>
        <li className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}
          />
          <b>Bank Offer </b>5% Cashback on Flipkart Axis Bank CardT&C
        </li>
        <li className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}
          />
          <b>Partner Offer </b> Purchase now & get a surprise cashback coupon
          for January / February 2023Know More
        </li>
        <li className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}
          />
          <b>Partner Offer </b> Sign up for Flipkart Pay Later and get Flipkart
          Gift Card worth up to ₹500*Know More
        </li>
        <li className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90"
            alt=""
            height={20}
          />
          <b> EMI starting </b> from ₹832/monthView Plans
        </li>

        <div className="Description">
          <div className="colors">
            <p className="color">Color</p>
            <div className="colorimg">
              <img src={data.url} alt="" />
              <img src={data.url} alt="" />
              <img src={data.url} alt="" />
            </div>
          </div>
          <div className="highlights">
            <p className="highlight_title">Highlights</p>
            <div className="highlight">
              <li className="highlight-item">{data.Descripition}</li>
              <li className="highlight-item">{data.Display}</li>
              <li className="highlight-item">{data.Camera}</li>
              <li className="highlight-item">{data.Battery}</li>
              <li className="highlight-item">{data.Proccessor}</li>
            </div>
          </div>
        </div>

        <div className="RatingsandReviews">
          <p className="RatingsandReviews_title">Ratings & Reviws</p>
          <div className="RatingsAndReviews_container">
            <div className="RatingsAndReviews_stars">
              <p className="RatingsAndReviews_reviews">
                {data.rating} <AiFillStar />
              </p>
              <p className="RatingsAndReviews_ratings">
                {data.rating} Ratings & {data.reviews} Reviews
              </p>
            </div>
            <div className="RatingsAndReviews_charts">
              <li>
                <p className="star">5</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "80%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">4</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "50%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">3</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "33.6%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">2</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "29.6%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">1</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "10%" }}></div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
