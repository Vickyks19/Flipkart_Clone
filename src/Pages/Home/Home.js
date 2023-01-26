import React from "react";
import "./Home.css";
import BannerCarousel from "../../Components/BannerCarousel/BannerCarousel";
import CategoryBar from "../../Components/CategoryBar/CategoryBar";
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";
import { CategoryBarData, CarouselData, BestOf } from "../../Data";

function Home() {
  return (
    <div className="Home">
      <div className="Home_CategoryContainer">
        <div className="Home_CategoryBar">
          {CategoryBarData.map((item, index) => {
            return (
              <CategoryBar
                key={index}
                Imgsrc={item.imageSrc}
                CategoryName={item.category}
              />
            );
          })}
        </div>
      </div>

      <div className="Home_Container">
        <div className="Home_Carousel">
          <BannerCarousel data={CarouselData} />
        </div>

        <div className="Home_ProductCarousel">
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Best of Electronics"
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Beauty,Food,Toys"
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Winter Essentials"
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Wedding & Gifting Specials"
            Data={BestOf.Electronics}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
