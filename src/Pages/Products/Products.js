import React from "react";
import { Link } from "react-router-dom";
import ProductDetailCard from "../../Components/ProductDetailCard/ProductDetailCard";
import { ProductsData } from "../../ProductData";
import "./Products.css";

function Products() {
  return (
    <div className="Products">
      <div className="Products_Filters">
        <p className="Filter_head">Filters</p>

        <div className="Category">
          <p className="Filter_categoryHead">Categories</p>
          <div className="Filter_category">Mobiles</div>
        </div>

        <div className="Price">
          <p className="PriceHead">Price</p>
          <input type="range" name="" id="" className="PriceRange" />
          <div className="Price_Input">
            <input value={0} className="pricebox" /> <p>to</p>
            <input value={50000} className="pricebox" />
          </div>
        </div>

        <div className="Brand">
          <p>Brand</p>
        </div>
      </div>
      <div className="Product_Items">
        <p className="totalresults">
          Showing 1- {ProductsData.length} of {ProductsData.length} results
        </p>
        <div className="sortby">
          <p>Sortby</p>
          <ul className="sortitems">
            <li className="sortitem">Relevance</li>
            <li className="sortitem">Popularity</li>
            <li className="sortitem">Price-Low to High</li>
            <li className="sortitem">Price-High to Low</li>
            <li className="sortitem">Newest First</li>
          </ul>
        </div>

        <div>
          {ProductsData.map((item, index) => (
            <Link key={index} to={`/ProductDetails/${item.id}`}>
              <ProductDetailCard Data={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
